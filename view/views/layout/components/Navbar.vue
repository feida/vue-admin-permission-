<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>

        <breadcrumb class="breadcrumb-container"></breadcrumb>

        <div class="right-menu">
            <error-log class="errLog-container right-menu-item"></error-log>


            <!--<lang-select class="international right-menu-item"></lang-select>-->

            <!--<el-tooltip :content="'布局大小'" effect="dark" placement="bottom">-->
                <!--<size-select class="international right-menu-item"/>-->
            <!--</el-tooltip>-->

            <div style="display: inline-block;" class="theme-switch right-menu-item">
                <span>帐号:</span>
                <el-tag style="margin-right: 20px;">{{name}}</el-tag>
                <span>角色:</span>
                <el-tag style="margin-right: 5px;" type="danger" v-if="roles.length==0">游客（未配置任何角色）</el-tag>
                <el-tag style="margin-right: 5px;" type="success" v-else v-for="r in roles" :key="r.val">{{r.name}}
                </el-tag>
            </div>

            <!--<el-tooltip effect="dark" :content="'全屏'" placement="bottom">-->
                <!--<screenfull class="screenfull right-menu-item"></screenfull>-->
            <!--</el-tooltip>-->


            <!--<el-tooltip effect="dark" :content="'换肤'" placement="bottom">-->
                <!--<theme-picker class="theme-switch right-menu-item"></theme-picker>-->
            <!--</el-tooltip>-->
            <el-dropdown class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/">
                        <el-dropdown-item>
                            {{`首页`}}
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item>
                        <span @click="handleUpdatePwd" style="display:block;">{{'修改密码'}}</span>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <span @click="logout" style="display:block;">{{'退出登录'}}</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

        <!--弹出窗口：修改密码-->
        <el-dialog title="修改密码" :visible.sync="dialogVisible" width="20%">
            <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="120px">

                <el-form-item label="原密码" prop="oldPassword">
                    <el-input type="password" v-model="temp.oldPassword"></el-input>
                </el-form-item>

                <el-form-item label="新密码" prop="newPassword">
                    <el-input type="password" v-model="temp.newPassword"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="updatePwd">确定</el-button>
            </div>
        </el-dialog>


    </el-menu>
</template>

<script>
    import {resetPassword} from '@/api/system'
    import {mapGetters} from 'vuex'
    import Breadcrumb from '@/components/Breadcrumb'
    import Hamburger from '@/components/Hamburger'
    import ErrorLog from '@/components/ErrorLog'
    import Screenfull from '@/components/Screenfull'
    import LangSelect from '@/components/LangSelect'
    import SizeSelect from '@/components/SizeSelect'
    import ThemePicker from '@/components/ThemePicker'

    export default {
        data(){

            return {
                dialogVisible: false,
                temp: {
                    oldPassword:null,
                    newPassword: null,
                },
                rules: {
                    oldPassword: [
                        {required: true, message: '请输入原始密码', trigger: 'blur'},
                        { pattern: /^(\w){6,20}$/, message: '只能输入6-20个字母、数字、下划线',trigger:'blur'}
                        ],
                    newPassword: [
                        { pattern: /^(\w){6,20}$/, message: '只能输入6-20个字母、数字、下划线',trigger: 'blur'}
                    ]
                },
            }
        },
        components: {
            Breadcrumb,
            Hamburger,
            ErrorLog,
            Screenfull,
            LangSelect,
            SizeSelect,
            ThemePicker
        },
        computed: {
            ...mapGetters([
                'sidebar',
                'name',
                'admin_name',
                'avatar',
                'roles',
            ])
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('toggleSideBar')
            },
            logout() {
                this.$store.dispatch('LogOut').then(() => {
                    location.reload()
                })
            },
            handleUpdatePwd() {
                this.dialogVisible = true;
                this.$nextTick(() => this.$refs['dataForm'].clearValidate())
            },
            updatePwd() {
                let that = this;
                this.$refs['dataForm'].validate((valid) => {
                    if (!valid) return;
                    const tempData = Object.assign({}, this.temp);//copy obj

                    tempData.admin_name = that.name;
                    resetPassword(tempData).then(res => {
                        if(res){
                            this.dialogVisible = false;
                            this.$message.success("更新密码成功")
                        }
                    })
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .breadcrumb-container{
            float: left;
        }
        .errLog-container {
            display: inline-block;
            vertical-align: top;
        }
        .right-menu {
            float: right;
            height: 100%;
            &:focus{
                outline: none;
            }
            .right-menu-item {
                display: inline-block;
                margin: 0 8px;
            }
            .screenfull {
                height: 20px;
            }
            .international{
                vertical-align: top;
            }
            .theme-switch {
                vertical-align: 15px;
            }
            .avatar-container {
                height: 50px;
                margin-right: 30px;
                .avatar-wrapper {
                    margin-top: 5px;
                    position: relative;
                    .user-avatar {
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                    }
                    .el-icon-caret-bottom {
                        cursor: pointer;
                        position: absolute;
                        right: -20px;
                        top: 25px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
