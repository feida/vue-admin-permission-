<template>
    <div class="app-container">

        <!--查询  -->
        <el-row style="margin-bottom: 30px;">
            <el-input style="width:200px;" v-model="listQuery.content" placeholder="品牌/店铺/模式" size="mini"></el-input>
            <span style="margin-right: 15px;"></span>
            <el-tooltip class="item" content="搜索" placement="top">
                <el-button icon="el-icon-search" circle @click="fetchData(1)" size="mini"></el-button>
            </el-tooltip>
        </el-row>

        <!--列表-->
        <el-table style="width: 100%" :data="list" v-loading.body="listLoading" element-loading-text="Loading" stripe border fit highlight-current-row size="mini">
            <el-table-column type="expand">
                <template slot-scope="scope" >
                    <el-form label-position="left" inline class="demo-table-expand" >
                        <el-form-item label="店铺ID" style="width: 49%" ><span @click='handleCopy(scope.row.id,$event)' >{{scope.row.id }}</span></el-form-item>
                        <el-form-item label="品牌ID" style="width: 49%"><span @click='handleCopy(scope.row.brand_id,$event)'>{{scope.row.brand_id }}</span></el-form-item>
                        <el-form-item label="店铺地址" style="width: 49%"><span>{{scope.row.address }}</span></el-form-item>
                        <el-form-item label="店铺电话" style="width: 49%"><span>{{scope.row.phone }}</span></el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="brand_name" label="品牌名称" width="110rem"></el-table-column>
            <el-table-column prop="name" label="店铺名称" width="210rem"></el-table-column>
            <el-table-column prop="mode" label="店铺模式" width="110rem"></el-table-column>
            <el-table-column  label="店铺激活码" width="140rem">
                <template slot-scope="scope">
                    <span @click='handleCopy(scope.row.pos_key,$event)'>
                        {{scope.row.pos_key | keyFilter }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column
                    class-name="status-col"
                    label="是否开启2.0"
                    width="100rem"
                    prop="pos_version">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.pos_version" disabled
                            @change="changeSwitchPosVersion(scope.row)">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column
                    class-name="status-col"
                    label="是否开启EMQ"
                    width="110rem"
                    prop="pos_version">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.is_open_emq_push" disabled
                               @change="changeSwitchIsOpenEmqPush(scope.row)">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="city" label="城市" width="80rem"></el-table-column>
            <el-table-column  label="营业时间" width="130rem">
                <template slot-scope="scope">
                    <span>{{scope.row.open_time }}</span> - <span>{{scope.row.close_time }}</span>
                </template>
            </el-table-column>

          <el-table-column label="操作" align="center" width="150rem"  >
            <template slot-scope="scope">
                <el-dropdown class="avatar-container right-menu-item" trigger="click">
                    <div class="avatar-wrapper">更多<i class="el-icon-caret-bottom"></i></div>
                    <el-dropdown-menu slot="dropdown">
                        <router-link :to="'/shop_manage/shop_customer_list/'+scope.row.brand_id+'/'+scope.row.id">
                            <el-dropdown-item v-perm="'b:shop:customer:list'">
                                {{`顾客列表`}}
                            </el-dropdown-item>
                        </router-link>
                        <router-link :to="'/shop_manage/shop_order_list/'+scope.row.brand_id+'/'+scope.row.id">
                            <el-dropdown-item v-perm="'b:shop:order:list'">
                                {{`线上订单`}}
                            </el-dropdown-item>
                        </router-link>
                        <router-link :to="'/shop_manage/pos_order_list/'+scope.row.brand_id+'/'+scope.row.id">
                            <el-dropdown-item v-perm="'b:pos:order:list'">
                                {{`pos订单`}}
                            </el-dropdown-item>
                        </router-link>
                        <a :href ="`http://pos.kc.restoplus.cn/pos/LocalPosSyncData/serverCommand?brandId=`+scope.row.brand_id+`&shopId=`+scope.row.id+`&type=serverCommand&sql=`" target="_blank">
                            <el-dropdown-item v-perm="'b:shop:custom:instruct'">
                                {{`指令`}}
                            </el-dropdown-item>
                        </a>
                        <a :href ="`http://106.15.11.6:3000/log/`+currentDate+`/`+scope.row.brand_name+`/`+scope.row.name+``" target="_blank">
                            <el-dropdown-item v-perm="'b:shop:newpos:log'">
                                {{`日志`}}
                            </el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>

            </template>
          </el-table-column>
        </el-table>
        <div style="margin-bottom: 30px;"></div>

        <!--分页-->
        <div class="pagination-container">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page="listQuery.page_index" :page-sizes="[10,20,30, 50]"
                           :page-size="listQuery.page_size" layout="total, sizes, prev, pager, next, jumper"
                           :total="listQuery.total">
            </el-pagination>
        </div>


    </div>
</template>

<script>

    import {
        getShopDetailList
    } from '@/api/restoBrand'
    import debounce from 'lodash/debounce'
    import moment from 'moment'
    import clip from '@/utils/clipboard'
    import clipboard from '@/directive/clipboard/index.js'


    export default {
        name: 'shopManage',
        directives: {
            clipboard
        },
        data() {
            return {
                listLoading: true,
                currentDate: moment().format('YYYY-MM-DD'),
                list: [],
                listQuery: {
                    page_index: 1,
                    page_size: 10,
                    total: 0,
                    content: null
                },

                dialogFormVisible: false,
                dialogStatus: '',
                temp: {
                    idx: null,//表格的下标
                    id: null,
                    name: null,
                    open_time: null,
                    close_time: null,
                    update_time:null
                }
            }
        },
        filters: {
            statusFilter(status) {
                const statusMap = {
                    true: 'success',
                    false: 'danger'
                };
                return statusMap[status]
            },
            keyFilter(key) {
                if(key){
                    return key.replace(/\s/g,' ').replace(/(.{4})/g,"$1 ");
                }
            }
        },
        created() {
            this.fetchData()
        },

        watch: {
            //延时查询
            'listQuery.content': debounce(function () {
                this.fetchData(1)
            }, 500)
        },//watch

        methods: {
            changeSwitchPosVersion (status) {
                console.log(status)
            },
            changeSwitchIsOpenEmqPush(status){
                console.log(status)
            },
            handleCopy(text, event) {
                clip(text, event)
            },
            //分页
            handleSizeChange(val) {
                this.listQuery.page_size = val;
                this.fetchData();
            },
            handleCurrentChange(val) {
                this.listQuery.page_index = val;
                this.fetchData();
            },

            //查询
            fetchData(current) {

                if (current) {
                    this.listQuery.page_index = current
                }
                this.listLoading = true;
                getShopDetailList(this.listQuery).then(response => {
                    this.list = response.data.list;

                    this.list.map((value) => {
                        value.pos_version = !!value.pos_version;
                        value.is_open_emq_push = !!value.is_open_emq_push;

                    })

                    this.listQuery.total = response.data.count;
                    this.listLoading = false
                })
            },
            filterPosVersion(value, row, column) {
                return row.pos_version === value;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .demo-table-expand {
        font-size: 5px;
    }
    .demo-table-expand label {
        width: 40px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
