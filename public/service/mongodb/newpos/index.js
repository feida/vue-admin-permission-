/**
 * @author wxh on 2018/11/19
 * @copyright
 * @desc
 */
const mongoose = require('mongoose');

const config = require('../../config');

mongoose.Promise = global.Promise;

if(!config && !config.mongodb && !config.mongodb.newpos){
    throw new Error('please provide mongodb config');
}

const NEWPOS_CONFIG = config.mongodb.newpos;


const client = mongoose.createConnection(NEWPOS_CONFIG.url, {
    useNewUrlParser:true
});

client.on('connected',function(err){
    if(err){
        console.log('连接数据库失败：'+err);
    }else{
        console.log('数据库成功连接到：'+NEWPOS_CONFIG.url);
    }
});

client.on('error', function(err){
    console.error(err.stack);
});

const order         = require('./schema/order');


client.model('TbOrder', order.TbOrderSchema, 'tb_order');
client.model('TbOrderItem', order.TbOrderItemSchema, 'tb_order_item');
client.model('TbOrderPaymentItem', order.TbOrderPaymentItemSchema, 'tb_order_payment_item');


exports.client = client;
exports.mongoose = mongoose;
exports.ObjectId = mongoose.Types.ObjectId;