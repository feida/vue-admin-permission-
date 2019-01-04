/**
 * @author wxh on 2018/12/26
 * @copyright
 * @desc
 */
const restoBrandModel = require('../../public/model/restoBrand/index');
const brandCurrencyModel = require('../../public/model/brandCurrency/index');
const brandCurrencyCustomerModel = require('../../public/model/brandCurrency/customer');


const async = require('async');
const _ = require('lodash');

const util = require('util');

/**
 * 获取微信会员信息
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.getCustomerInfoList = function (req, res, next) {

    let brandId =   req.query.brand_id;
    let sex     =   req.query.sex;  // 1 男、2女 3未知

    let content =   req.query.content;  // 手机号码或昵称



    let pageSkip =  req.query.page_skip,
        pageSize =  req.query.page_size;

    let condition ="";

    if (!brandId) return next(new BadRequestError('brand_id is null'));

    if(sex){
        condition += `c.sex in (${sex.join(',')}) `;
    }

    console.log(`----condition----`,condition)

    if(content){
        condition += `${sex?'and ':''} (c.id like '%${content}%' or c.telephone like  '%${content}%' or c.nickname like  '%${content}%') `;
    }


    let sql = `SELECT d.* from brand  b left join database_config d on d.id = b.database_config_id where b.id = '${brandId}'`;
    restoBrandModel.getOneCustomSqlInfo(sql,(err,result)=>{
        if(err)  return next(err);

        if(!result) {
            return res.json({
                flag: "0000",
                msg: '',
                result: {
                    ok: true,
                    message: '',
                    data:{
                        customer:{
                            count:0,
                            rows:[]
                        }
                    }
                }
            });
        }

        let database = (result.url).match(/3306\/(\S*)\?use/)[1];

        async.parallel({
            count: (done)=>{
                let sql = `select count(*) count from tb_customer c ${condition ? 'where '+condition +' and ':'where '} id is not null and id !=""`;
                brandCurrencyModel.getOneCustomSqlInfo(database,sql,done)
            },
            list: (done)=>{
                // let sql = `SELECT c.id,c.nickname,c.telephone,c.is_bind_phone,c.regiest_time,c.sex,
                //     (SELECT remain FROM tb_account WHERE id =c.account_id ) remain,
                //     (SELECT count(*) FROM tb_coupon WHERE customer_id =c.id ) coupon_count,
                //     (SELECT telephone FROM tb_customer WHERE id =c.share_customer ) share_telephone,
                //     (SELECT birth_date FROM tb_customer_detail WHERE id =c.customer_detail_id ) birth_date,
                //     (SELECT count(*) FROM tb_appraise WHERE customer_id =c.id ) appraise_count,
                //     (SELECT sum(order_money)  FROM tb_order WHERE customer_id =c.id ) order_money_count,
                //     IFNULL((SELECT count(*) FROM tb_order WHERE customer_id =c.id and (parent_order_id is null or parent_order_id !='')),0)  order_count,
                //     IFNULL((SELECT sum(order_money)  FROM tb_order WHERE customer_id =c.id ),0) order_money_count,
                //     IFNULL(round((IFNULL((SELECT sum(order_money)  FROM tb_order WHERE customer_id =c.id ),0) * 1.00 /IFNULL((SELECT count(*) FROM tb_order WHERE customer_id =c.id and (parent_order_id is null or parent_order_id !='')),0)),2),0)  single_all
                //     from tb_customer c   ${condition ? 'where '+condition+' and ':'where '}  c.id is not null and c.id !="" order by c.last_login_time limit ${pageSize} offset ${pageSkip}`;
                // brandCurrencyModel.getAllCustomSqlInfo(database,sql,done)

                let sql = `SELECT c.id,c.nickname,c.telephone,c.is_bind_phone,c.regiest_time,c.city,c.sex,c.account_id ,c.share_customer,c.customer_detail_id ,c.bind_phone_time ,c.last_login_time   from tb_customer c ${condition ? 'where '+condition +' and ':'where '} id is not null and id !=""  order by c.last_login_time limit ${pageSize} offset ${pageSkip}`;
                brandCurrencyModel.getAllCustomSqlInfo(database,sql,(err,customer_list)=>{
                    if(err) return done(err);
                    let arr_customer_id = [];
                    let arr_account_id = [];
                    let arr_share_customer = [];
                    let arr_customer_detail_id = [];

                    if(customer_list.length == 0 ) return done(null,customer_list);
                    _.forEach(customer_list,(value)=>{
                        arr_customer_id.push(`'${value.id}'`);
                        arr_account_id.push(`'${value.account_id}'`);
                        arr_account_id.push(`'${value.account_id}'`);
                        arr_share_customer.push(`'${value.share_customer}'`);
                        arr_customer_detail_id.push(`'${value.customer_detail_id}'`)

                    });
                    async.parallel({    //余额
                        remain: (cb)=>{
                            let remain_sql= `SELECT id,remain FROM tb_account WHERE id in (${arr_account_id.join(',')})`;
                            brandCurrencyModel.getAllCustomSqlInfo(database,remain_sql,cb)
                        },
                        share_telephone:(cb)=>{ //被邀请人手机号码
                            let share_telephone_sql= `SELECT id,telephone share_telephone  FROM tb_customer WHERE  id in (${arr_share_customer.join(',')})`;
                            brandCurrencyModel.getAllCustomSqlInfo(database,share_telephone_sql,cb)
                        },
                        customer_detail:(cb)=>{ //用户详情
                            let customer_detail_sql= `SELECT id,birth_date  FROM tb_customer_detail WHERE  id in (${arr_customer_detail_id.join(',')})`;
                            brandCurrencyModel.getAllCustomSqlInfo(database,customer_detail_sql,cb)
                        },
                        coupon_count:(cb)=>{ //用户礼品卷总数
                            let coupon_count_sql= `SELECT customer_id, count(*) coupon_count FROM tb_coupon where customer_id in (${arr_customer_id.join(',')}) GROUP BY customer_id`;
                            brandCurrencyModel.getAllCustomSqlInfo(database,coupon_count_sql,cb)
                        },
                        appraise_count:(cb)=>{ //用户评论总数
                            let appraise_count_sql= `SELECT customer_id, count(*) appraise_count  FROM tb_appraise where customer_id in (${arr_customer_id.join(',')}) GROUP BY customer_id`;
                            brandCurrencyModel.getAllCustomSqlInfo(database,appraise_count_sql,cb)
                        },
                        order_money_count:(cb)=>{ //用户金额总量
                            let order_money_count_sql= `SELECT customer_id,  sum(order_money) order_money_count  FROM tb_order where customer_id in (${arr_customer_id.join(',')}) and order_state !=9 and production_status !=6 GROUP BY customer_id`;
                            brandCurrencyModel.getAllCustomSqlInfo(database,order_money_count_sql,cb)
                        },
                        order_count:(cb)=>{ //用户订单总量
                            let order_count_sql= `SELECT customer_id,  count(*) order_count  FROM tb_order where customer_id in (${arr_customer_id.join(',')}) and (parent_order_id is null or parent_order_id !='' )  and  order_state !=9 and production_status !=6  GROUP BY customer_id`;
                            brandCurrencyModel.getAllCustomSqlInfo(database,order_count_sql,cb)
                        }
                    },(err, customer_results)=>{
                        if(err) return next(err);

                        _.forEach(customer_list,(value)=>{
                            let remain_result = _.find(customer_results.remain, {id: value.account_id});
                            if(remain_result){
                                value.remain = remain_result.remain;
                            }

                            let share_telephone_result = _.find(customer_results.share_telephone, {id: value.share_customer});
                            if(share_telephone_result){
                                value.share_telephone = share_telephone_result.share_telephone;
                            }else {
                                value.share_telephone = '';
                            }

                            let customer_detail_result = _.find(customer_results.customer_detail, {id: value.customer_detail_id});
                            if(customer_detail_result){
                                value.birth_date = customer_detail_result.birth_date;
                            }else {
                                value.birth_date = '';
                            }

                            let coupon_count_result = _.find(customer_results.coupon_count, {customer_id: value.id});
                            if(coupon_count_result){
                                value.coupon_count = coupon_count_result.coupon_count;
                            }else {
                                value.coupon_count = 0;
                            }

                            let appraise_count_result = _.find(customer_results.appraise_count, {customer_id: value.id});
                            if(appraise_count_result){
                                value.appraise_count = appraise_count_result.appraise_count;
                            }else {
                                value.appraise_count = 0;
                            }

                            let order_money_count_result = _.find(customer_results.order_money_count, {customer_id: value.id});
                            if(order_money_count_result){
                                value.order_money_count = order_money_count_result.order_money_count;
                            }else {
                                value.order_money_count = 0;
                            }

                            let order_count_result = _.find(customer_results.order_count, {customer_id: value.id});

                            if(order_count_result){
                                value.order_count = order_count_result.order_count;
                            }else {
                                value.order_count = 0;
                            }

                            value.mean = value.order_count == 0 ? 0:(value.order_money_count/value.order_count).toFixed(2);

                            value.is_bind_phone = (value.is_bind_phone.toJSON()).data[0];

                            if(value.telephone){
                                value.telephone = value.telephone.substr(0,3)+"****"+value.telephone.substr(7)
                            }

                            if(value.share_telephone){
                                value.share_telephone = value.share_telephone.substr(0,3)+"****"+value.share_telephone.substr(7)
                            }

                        });
                        return done(null,customer_list)
                    });
                })
            },
        },function(err, results){
            if(err) return next(err);
            res.json({
                flag: "0000",
                msg: '',
                result: {
                    ok: true,
                    message: '',
                    data:{
                        count:results.count.count,
                        list:results.list
                    }
                }
            });
        });
    });
};