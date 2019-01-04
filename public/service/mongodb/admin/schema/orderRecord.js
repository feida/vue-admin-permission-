/**
 * @author wxh on 2018/12/7
 * @copyright
 * @desc
 */

const mongoose = require('mongoose');
const crypto = require('crypto');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

//用户操作订单记录===================================================
const  OrderRecordSchema = new Schema({
    

    admin_id                : {type: ObjectId, required: false, ref: 'Administrator'},   //用户ID
    create_time             : {type: Date,  required: true},         //创建时间

    brand_id                : {type: String,  required: false},       //品牌Id
    brand_name              : {type: String,  required: false},       //品牌名称
    shop_id                 : {type: String,  required: false},       //门店Id
    shop_name               : {type: String,  required: false},       //门店名称


    order_id                : {type: String,  required: false},       // 订单id
    serial_number           : {type: String,  required: false},       // 订单流水号
    order_state             : {type: Number,  required: false},       // 订单支付状态
    production_status       : {type: Number,  required: false},       // 订单打印状态
    order_money             : {type: Number,  required: false},       // 当前订单金额
    amount_with_children    : {type: Number,  required: false},       // 订单累计金额（记主订单上其他为0）
    order_pos_discount_money: {type: String,  required: false},       // pos端折扣
    erase_money             : {type: Number,  required: false},       // 抹零


    action_details: {type: Array,  required: false},       //操作详情

});


//用户操作订单支付项记录===================================================
const  OrderPaymentItemRecordSchema = new Schema({


    admin_id                : {type: ObjectId, required: false, ref: 'Administrator'},   //用户ID
    create_time             : {type: Date,  required: true},         //创建时间

    brand_id                : {type: String,  required: false},       //品牌Id
    brand_name              : {type: String,  required: false},       //品牌名称
    shop_id                 : {type: String,  required: false},       //门店Id
    shop_name               : {type: String,  required: false},       //门店名称


    order_id                : {type: String,  required: false},       // 订单id
    serial_number           : {type: String,  required: false},       // 订单流水号
    payment_mode_id         : {type: Number,  required: false},       // 订单支付项code
    pay_value               : {type: Number,  required: false},       // 订单支付项金额

    action_details: {type: Array,  required: false},       //操作详情

});



exports.OrderRecordSchema = OrderRecordSchema;
exports.OrderPaymentItemRecordSchema = OrderPaymentItemRecordSchema;