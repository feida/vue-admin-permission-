/**
 * @author wxh on 2018/11/19
 * @copyright
 * @desc
 */

const async = require('async');

const request = require('request');
const moment = require('moment');


const spiderMongodb = require('../../service/mongodb/spider').client;

const ThirdPartyMerchantsUser = spiderMongodb.model('ThirdPartyMerchantsUser');

const ThirdPartyMerchantsSpiderApi = spiderMongodb.model('ThirdPartyMerchantsSpiderApi');

var MerchantBrandBusinessStatistics = spiderMongodb.model('MerchantBrandBusinessStatistics');



/**
 * 获取美团token及更新
 * @param callback
 */
exports.getBeautifulGroupToken = function (callback) {

    request({
        method:"POST",
        url:`https://epassport.meituan.com/api/account/login?service=waimai&bg_source=3&loginContinue=http:%2F%2Fe.waimai.meituan.com%2Fv2%2Fepassport%2Fentry&loginType=account`,
        headers:{
            "content-type":"application/json;charset=UTF-8",
            "X-Requested-With":"XMLHttpRequest"
        },
        body:{
            "login": "xmshgf",
            "password": "a11223344",
            "rohrToken": "eJzFlFFvmzAUhf+LpeRlVrCNMRApmki7VKxL03bJ1qqbIkIcwkIAgUnaVf3vuyaBdlO0PU5C6PO5l3uOweIZFf4S9Z/RKgki1KeEEG6+YLSTBeoj2iM9gTBSJZQszgS1bZcLwjAK32gOAdHCaFF8OUf9B4cQLAj5roVbWD9QlxFMiQNSwxyYcbh0lw9NaK1UXvYNQ+ZBWeZZoXpbGasqSHthtjWCMMyqVBlVGqt4J5MsitP3i2heZlURyoHZLWWxi4H2QbwN4m6eBGqVFdsB64ZZquK0kgPtoA16h57f5u/Yq7EhU1U8dRO5UvNFplS2nSdxuhl02OgYA+gYpIyjtMo75qjN0jHPzQ4TxzywOriB1GQCjcGyyQVLnaxjejAWrlP5QN4xXWsyAmvrWQ6D5KM6WwdpKpPWTR7kue6ZV/k8/LPeLeJo/e/tFTLM4P5f9qczR/J6v4QD+LdPB2chSxGco+1UnyPTFJg6Ljx0INESaci2W7Ja4jVxILMmE1PhtiRaog1Zdku8JdYQd1pqn+VWS6xxMw99FpDV0iGBgymrq5wB1ek5aKSeZ7nYraMIgZ06ic2xU4916BFcgh3dw+lR4awGeFeb+l19qwihDPtX17OpLp8g8wSxE0RPkNdSbdQMBfvg7afCw9l0OrnSFkzv3nm1pC523mRxBXbN1ylKT9HTxvCvgro+7UDy4360Dz9cRmfe2LsaGo48v70JV97s0fns03CyHE6W6ztjJZ9skUXGp+yrX26Yz4Kfpbe+eWf52fJyMRwnd6Nibd57wQ91QS6s4f0dFUkxnKTWNEpISM+eViSQt+4GvfwCayyAFg=="
        },
        json:true

    },(error,response,body)=> {
        console.log(body);



    })
};




/**
 * 第三方商户平台登陆
 * @param type
 * @param callback
 */
exports.login = function (type =1, callback) {
    let condition = {
        // admin_name: {$exists: true, $eq: name}
    };
    ThirdPartyMerchantsUser.findOne(condition,callback);
};

/**
 * 创建第三方商户登陆账户
 * @param merchantUser
 * @param callback
 */
exports.createUser = function (merchantUser, callback) {


    //验证用户名是否重复
    let condition = {
        user_name: {$exists: true, $eq: merchantUser.user_name}
    };
    ThirdPartyMerchantsUser.findOne(condition, function (err, user) {
        if (err) {
            return callback(err);
        }

        if (user) {
            return callback(new BadRequestError('此用户名已存在！'));
        } else {

            let merchantUserDoc = {
                user_name:merchantUser.user_name,
                merchant_brand:merchantUser.merchant_brand,
                user_password:merchantUser.user_password,
                platform_type:merchantUser.platform_type,
                recently_spider_time:new Date(),
                create_time: new Date(),
                update_time: new Date()
            };

            ThirdPartyMerchantsUser.create(merchantUserDoc, function (err, merchantUser) {
                if (err)  {
                    return callback(err);
                }

                if (!merchantUser) {
                    return callback(null, null);
                }

                return callback(null, merchantUser._id);
            });
        }
    });
};

/**
 *  @desc 获取商业用户总量
 * */
exports.getMerchantUserTotal = function (condition,callback) {
    ThirdPartyMerchantsUser.countDocuments(condition, callback);
};
/**
 * 获取商业用户信息
 * @param condition
 * @param pageSkip
 * @param pageSize
 * @param callback
 */
exports.getMerchantUserList = function (condition,pageSkip,pageSize,callback) {
    ThirdPartyMerchantsUser.find(condition).sort(' -update_time').skip(pageSkip).limit(pageSize).exec(callback);
};


/**
 * 获取经营分析/营业统计 总量
 * @param condition
 * @param callback
 */
exports.getBusinessStatisticsInfoTotal = function (condition,callback) {
    MerchantBrandBusinessStatistics.countDocuments(condition, callback);
};

/**
 * 获取经营分析/营业统计
 * @param condition
 * @param pageSkip
 * @param pageSize
 * @param callback
 */
exports.getBusinessStatisticsInfo = function (condition,pageSkip,pageSize,callback) {
    MerchantBrandBusinessStatistics.find(condition)
        .populate('merchant_user_id')
        .sort('-statistics_date -update_time')
        .skip(pageSkip)
        .limit(pageSize)
        .exec(callback);
};

/**
 * 创建第三方商户爬取的API
 * @param spider_api
 * @param callback
 */
exports.createSpiderApi = function (spider_api, callback) {
    //验证url是否重复
    let condition = {
        url: {$exists: true, $eq: spider_api.url}
    };
    ThirdPartyMerchantsSpiderApi.findOne(condition, function (err, user) {
        if (err) return callback(err);

        if (user)   return callback(new BadRequestError('此url已存在！'));

        let spiderApiDoc = {
            url:spider_api.url,
            method:spider_api.method,
            platform_type:spider_api.platform_type,
            table_name:spider_api.table_name,
            create_time: new Date(),
            update_time: new Date()
        };

        ThirdPartyMerchantsSpiderApi.create(spiderApiDoc, function (err, spiderApi) {
            if (err)  {
                return callback(err);
            }

            if (!spiderApi) {
                return callback(null, null);
            }

            return callback(null, spiderApi._id);
        });
    });
};

/**
 * 根据平台获取需要爬取的url
 * @param platformType
 * @param callback
 */
exports.getSpiderApiByPlatform = function (platformType, callback) {
    ThirdPartyMerchantsSpiderApi.find({platform_type:platformType},callback);
};

/**
 * 获取任务间隔最长的用户并更新或指定id
 * @param id
 * @param callback
 */
exports.getTaskFurthestUserAndUpdate = function (id,callback) {
    if(id){
        ThirdPartyMerchantsUser.findOne({_id:id}).sort('recently_spider_time').exec((err,docs)=>{
            if(err) return callback(err);
            ThirdPartyMerchantsUser.update({_id: docs._id},{$set: {recently_spider_time:new Date()}},(err)=>{
                if(err) return callback(err);
                callback(null,docs)
            });
        })
    }else {
        ThirdPartyMerchantsUser.findOne({}).sort('recently_spider_time').exec((err,docs)=>{
            if(err) return callback(err);
            ThirdPartyMerchantsUser.update({_id: docs._id},{$set: {recently_spider_time:new Date()}},(err)=>{
                if(err) return callback(err);
                callback(null,docs)
            });
        })
    }
};

/**
 * 根据url 和表名存储美团数据
 * @param content
 * @param callback
 */
exports.beautifulGroupDataStorageByGetUrl = function (content,callback) {

    request({
        method:content.method,
        url:content.url,
        headers:{
            "Cookie":`_lxsdk_cuid=1672b09ad38c8-00beacc7fb18c3-35607400-1aeaa0-1672b09ad38c8; uuid=b44671a74e01c50e4a7f.1542615317.1.0.0; acctId=43893932; wmPoiId=-1; _source=PC; _lx_utm=utm_source%3DBaidu%26utm_medium%3Dorganic; token=${content.token}; IJSESSIONID=1kas7m1a2pxns1b97v04eqixb9; iuuid=300221169104016EC38037BCA437846C59C4083729B91F3F7B14DF96378E0D0A; ci=10; cityname=%E4%B8%8A%E6%B5%B7; _lxsdk=300221169104016EC38037BCA437846C59C4083729B91F3F7B14DF96378E0D0A; __utma=74597006.833664865.1542686015.1542686015.1542686015.1; __utmc=74597006; __utmz=74597006.1542686015.1.1.utmcsr=blog.csdn.net|utmccn=(referral)|utmcmd=referral|utmcct=/xing851483876/article/details/81842329; ci3=1; i_extend=H__a100001__b1; latlng=31.22114,121.54409,1542686025216; _lxsdk_s=1672f4078b6-866-2d6-111%7C%7C17`
        },
    },  (error, response, body) =>{
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);
            if(!body.data.result.success) {
                callback(body.data.result.message)
            }
            var currentTableName = spiderMongodb.model(`${content.table_name}`);
            let condition = {
                merchant_user_id:content.merchant_user_id,
                statistics_date:`${moment().format('YYYY-MM-DD')}`
            };

            let update = body.data;
            update.create_time = new Date();
            update.update_time = new Date();

            currentTableName.update(condition,{$set:update},{upsert:true},(err)=>{
                if(err) return callback(err);
                let doc = update;
                doc.merchant_user_id = condition.merchant_user_id;
                doc.statistics_date = condition.statistics_date;
                callback(null,doc)
            });
        }else {
            callback(error)
        }
    });
};




