/**
 * @author wxh on 2018/11/19
 * @copyright
 * @desc
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const LoginSchema = {
    token               : {type: String, sparse: true, unique: true},
    expire              : {type: Date},
    token_update_time   : {type: Date}
};

//第三方商户平台用户===================================================
const ThirdPartyMerchantsUserSchema = new Schema({
    merchant_brand          : {type: String,   required: true},     //商户品牌
    user_name               : {type: String,   required: true},     //登录名
    user_password           : {type: String,   required: true},     //登陆密码
    platform_type           : {type: Number,   required: true},     //商品平台
    create_time             : {type: Date,     required: false},     //创建时间
    update_time             : {type: Date,     required: false},     //更新时间
    recently_spider_time    : {type: Date,     required: false},     //上次爬取时间

    login_token             : LoginSchema                       //token信息

});

ThirdPartyMerchantsUserSchema.index({uuid : 1});

//商户平台类型
ThirdPartyMerchantsUserSchema.statics.PLATFORM_TYPE = {
    HUNGRY : 1,             //饿了么
    BEAUTIFUL_GROUP : 2,    //美团
};



//第三方商户品牌门店信息===================================================
const ThirdPartyMerchantsBrandShopSchema = new Schema({
    merchant_user_id  : {type: ObjectId, required: true, ref: 'ThirdPartyMerchantsUser'},   //商户用户ID
    shop_name         : {type: String,   required: true},     //门店名称
    platform_shop_id  : {type: String,   required: false},     //平台门店id
    business_desc     : {type: String,   required: false},     //商务决策
    self_service      : {type: Number,   required: false},      //自助服务
    create_time       : {type: Date,     required: false},     //创建时间
    update_time       : {type: Date,     required: false},     //更新时间
});


//第三方商户品牌门店信息===================================================
const ThirdPartyMerchantsSpiderApiSchema = new Schema({
    url               : {type: String,   required: true,unique: true},     //url
    method            : {type: String,   required: true},     //请求方式
    platform_type     : {type: Number,   required: true},     //商品平台
    table_name        : {type: String,   required: true},     //存储的表名
    create_time       : {type: Date,     required: false},     //创建时间
    update_time       : {type: Date,     required: false},     //更新时间
});

//商户平台类型
ThirdPartyMerchantsSpiderApiSchema.statics.PLATFORM_TYPE = {
    HUNGRY : 1,             //饿了么
    BEAUTIFUL_GROUP : 2,    //美团
};

exports.ThirdPartyMerchantsUserSchema = ThirdPartyMerchantsUserSchema;
exports.ThirdPartyMerchantsBrandShopSchema = ThirdPartyMerchantsBrandShopSchema;
exports.ThirdPartyMerchantsSpiderApiSchema = ThirdPartyMerchantsSpiderApiSchema;