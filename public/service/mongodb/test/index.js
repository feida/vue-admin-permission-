/**
 * @author wxh on 2017/11/20
 * @copyright
 * @desc
 */

const mongoose = require('mongoose');

const config = require('../../config');

mongoose.Promise = global.Promise;

if(!config && !config.mongodb && !config.mongodb.test){
    throw new Error('please provide mongodb config');
}

const TEST_CONFIG = config.mongodb.test;


const client = mongoose.createConnection(TEST_CONFIG.url, {useNewUrlParser:true});


client.on('connected',function(err){
    if(err){
        console.log('连接数据库失败：'+err);
    }else{
        console.log('数据库成功连接到：'+TEST_CONFIG.url);
    }
});

client.on('error', function(err){
    console.error(err.stack);
});


const test = require('./schema/test');

client.model('TbTest', test.TestSchema, 'tb_test');

exports.client = client;
exports.mongoose = mongoose;
exports.ObjectId = mongoose.Types.ObjectId;