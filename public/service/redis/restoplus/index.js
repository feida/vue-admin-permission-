/**
 * @author wxh on 2017/11/20
 * @copyright
 * @desc
 */

const redis = require('redis');

const config = require('../../config');

if(!config && !config.redis && config.redis.restoplus){
    throw new Error('please provide mongodb config');
}

const TEST_CONFIG = config.redis.restoplus;



const REDIS_CONFIG = {
    host: TEST_CONFIG.host,
    port: TEST_CONFIG.port || 6379,
    db: TEST_CONFIG.db || 0
};

if(TEST_CONFIG.password){
    TEST_CONFIG.password = TEST_CONFIG.password;
}

const IFIBBS_CLIENT = redis.createClient(REDIS_CONFIG);

IFIBBS_CLIENT.on('connect',function(){
    console.log('redis成功连接到：' + TEST_CONFIG.host);
});

IFIBBS_CLIENT.on('error', function (err) {
    console.error(err.stack);
});

exports.client = IFIBBS_CLIENT;