/**
 * @author wxh on 2018/11/13
 * @copyright
 * @desc
 */

const async = require('async');
const adminMongodb = require('../../service/mongodb/admin').client;

const PaymentConstant = adminMongodb.model('PaymentConstant');
const Constant = adminMongodb.model('Constant');


/**
 *  @desc 添加支付常量
 * */
exports.newPaymentConstant = function (constant, callback) {
    // 验证用户名是否重复
    let condition = {
        type: {$exists: true, $eq: constant.type},
        code: {$exists: true, $eq: constant.code}
    };
    Constant.findOne(condition, function (err, payment_terms) {
        if (err) {
            return callback(err);
        }
        if (payment_terms) {
            return callback(new BadRequestError('此支付项已存在！'));
        } else {

            let constantDoc = {
                code:constant.code,
                name:constant.name,
                describe:constant.describe || '',
            };

            Constant.create(constantDoc, function (err, payment) {
                if (err)  {
                    return callback(err);
                }

                if (!payment) {
                    return callback(null, null);
                }

                return callback(null, payment._id);
            });
        }
    });
};

/**
 *  @desc 获取支付常量
 * */
exports.constantList = function (condition, callback) {
    Constant.find(condition, callback);
};