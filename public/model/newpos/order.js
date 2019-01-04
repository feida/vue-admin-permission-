/**
 * @author wxh on 2018/12/4
 * @copyright
 * @desc
 */

const newposMongodb = require('../../service/mongodb/newpos').client;
const ObjectId = require('../../service/mongodb/newpos').ObjectId;

const TbOrder = newposMongodb.model('TbOrder');
const TbOrderItem = newposMongodb.model('TbOrderItem');
const TbOrderPaymentItem = newposMongodb.model('TbOrderPaymentItem');


/**
 *  @desc 创建订单
 * */
exports.createNewposOrder = function (id,update, callback) {
    TbOrder.update({id},{$set:update},{upsert:true},(err)=>{
        if(err) return callback(err);
        callback(null)
    });
};

/**
 *  @desc 创建订单菜品信息
 * */
exports.createNewposOrderItem = function (id,update, callback) {
    TbOrderItem.update({id},{$set:update},{upsert:true},(err)=>{
        if(err) return callback(err);
        callback(null)
    });
};

/**
 *  @desc 创建订单支付信息
 * */
exports.createNewposOrderPaymentItem = function (id,update, callback) {
    TbOrderPaymentItem.update({id},{$set:update},{upsert:true},(err)=>{
        if(err) return callback(err);
        callback(null)
    });
};


/**
 *  @desc 获取订单总量
 * */
exports.getOrderCountByCondition = function (condition,callback) {
    TbOrder.countDocuments(condition, callback);
};


/**
 * 获取订单列表带分页
 * @param condition
 * @param pageSkip
 * @param pageSize
 * @param callback
 */
exports.getOrderListByCondition = function (condition,pageSkip,pageSize, callback) {
    TbOrder.find(condition).sort('-_id').skip(pageSkip).limit(pageSize).exec(callback);
};

/**
 * 获取主订单列表
 * @param condition
 * @param callback
 */
exports.getOrderDetailsByCondition = function (condition, callback) {
    TbOrder.find(condition).sort('-_id').exec(callback);
};

/**
 * 获取主订单菜品列表
 * @param condition
 * @param callback
 */
exports.getOrderItemPaymentDetailsByCondition = function (condition, callback) {
    TbOrderItem.find(condition).sort('-_id').exec(callback);
};

/**
 * 获取主订单支付列表
 * @param condition
 * @param callback
 */
exports.getOrderPaymentDetailsByCondition = function (condition, callback) {
    TbOrderPaymentItem.find(condition).sort('-_id').exec(callback);
};