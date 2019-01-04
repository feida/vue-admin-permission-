/**
 * @author wxh on 2018/11/13
 * @copyright
 * @desc
 */
const mongoose = require('mongoose');
const crypto = require('crypto');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


//支付项常量===================================================
const PaymentConstantSchema = new Schema({
    payment_code        : {type: Number,  required: true},       //支付编码
    payment_name        : {type: String,  required: true},       //支付名称
    payment_describe    : {type: String,  required: false},       //支付描述
});

PaymentConstantSchema.index({payment_code : 1, unique: true});

PaymentConstantSchema.virtual('id').get(function () {
    return this._id.toString();
});

//各项常量===================================================
const ConstantSchema = new Schema({
    type        : {type: Number,  required: true},       //常量类型
    code        : {type: Number,  required: true},       //编码
    name        : {type: String,  required: true},       //名称
    describe    : {type: String,  required: false},       //描述
});

ConstantSchema.virtual('id').get(function () {
    return this._id.toString();
});




exports.PaymentConstantSchema = PaymentConstantSchema;
exports.ConstantSchema = ConstantSchema;