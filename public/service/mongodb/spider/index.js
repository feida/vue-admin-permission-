/**
 * @author wxh on 2018/11/19
 * @copyright
 * @desc
 */
const mongoose = require('mongoose');

const config = require('../../config');

mongoose.Promise = global.Promise;

if(!config && !config.mongodb && !config.mongodb.spider){
    throw new Error('please provide mongodb config');
}

const SPIDER_CONFIG = config.mongodb.spider;


const client = mongoose.createConnection(SPIDER_CONFIG.url, {
    useNewUrlParser:true
});

client.on('connected',function(err){
    if(err){
        console.log('连接数据库失败：'+err);
    }else{
        console.log('数据库成功连接到：'+SPIDER_CONFIG.url);
    }
});

client.on('error', function(err){
    console.error(err.stack);
});

const thirdPartyMerchantsUser         = require('./schema/thirdPartyMerchantsUser');

const businessStatistics         = require('./schema/businessStatistics');

client.model('ThirdPartyMerchantsUser', thirdPartyMerchantsUser.ThirdPartyMerchantsUserSchema, 'third_party_merchants_user');
client.model('ThirdPartyMerchantsBrandShop', thirdPartyMerchantsUser.ThirdPartyMerchantsBrandShopSchema, 'third_party_merchants_brand_shop');
client.model('ThirdPartyMerchantsSpiderApi', thirdPartyMerchantsUser.ThirdPartyMerchantsSpiderApiSchema, 'third_party_merchants_spider_api');

client.model('MerchantBrandBusinessStatistics', businessStatistics.MerchantBrandBusinessStatisticsSchema, 'merchant_brand_business_statistics');

exports.client = client;
exports.mongoose = mongoose;
exports.ObjectId = mongoose.Types.ObjectId;