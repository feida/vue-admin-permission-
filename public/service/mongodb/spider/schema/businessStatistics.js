/**
 * @author wxh on 2018/11/20
 * @copyright
 * @desc
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


//商户品牌营业统计===================================================
const MerchantBrandBusinessStatisticsSchema = new Schema({
    merchant_user_id  : {type: ObjectId, required: true, ref: 'ThirdPartyMerchantsUser'},   //商户用户ID

    turnover          : {type: Number,   required: true},                                   //今日营业额
    ayerTurnoverTime  : {type: Number,   required: false},                                  //昨日同时段营业额


    settleAcc         : {type: Number,   required: true},                                   //今日预计订单收入
    ayerSettleAccTime : {type: Number,   required: false},                                  //昨日同时段预计订单收入

    effectiveOrders   : {type: Number,     required: false},                                  //今日有效订单
    ayerEffOrdersTime : {type: Number,     required: false},                                  //昨日同时段有效订单

    invalidOrders   : {type: Number,     required: false},                                    //今日无效订单
    ayerInvalidOrdersTime : {type: Number, required: false},                               //昨日同时段无效订单

    statistics_date   : {type: String,   required: false},

    create_time       : {type: Date,     required: false},     //创建时间
    update_time       : {type: Date,     required: false},     //更新时间

});

MerchantBrandBusinessStatisticsSchema.index({uuid : 1});


exports.MerchantBrandBusinessStatisticsSchema = MerchantBrandBusinessStatisticsSchema;
