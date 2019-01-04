/**
 * @author wxh on 2018/9/27
 * @copyright
 * @desc
 */
const async = require('async');


const adminMongodb = require('../../service/mongodb/admin').client;

const AdministratorRecord = adminMongodb.model('AdministratorRecord');
const OrderRecord = adminMongodb.model('OrderRecord');
const OrderPaymentItemRecord = adminMongodb.model('OrderPaymentItemRecord');

/**
 *  @desc 创建用户记录
 * */
exports.createAdministratorRecord = function (administrator, callback) {
    if (typeof callback != 'function') {
        callback = function () { };
    }
    let doc = {
        admin_id: administrator._id,
        admin_action: `${administrator.admin_name} ${administrator.action}`,
        action_details: administrator.action_details || [],
        create_time:new Date()
    };
    AdministratorRecord.create(doc, callback);
};

/**
 *  @desc 获取用户记录总量
 * */
exports.getAdministratorRecordTotal = function (condition,callback) {
    AdministratorRecord.countDocuments(condition, callback);
};

/**
 *  @desc 获取用户记录列表
 * */
exports.getAdministratorRecordList = function (condition,pageSkip,pageSize,callback) {

    // AdministratorRecord.aggregate([
    //     {
    //         $lookup: {
    //             from: "administrator",
    //             localField: "admin_id",
    //             foreignField: "_id",
    //             as: "admin_id"
    //         }
    //         },
    //     {
    //         $match : condition
    //     }
    // ])
    //     .sort('-_id')
    //     .skip(pageSkip).limit(pageSize)
    //     .exec(callback);

    AdministratorRecord.find(condition).populate('admin_id').sort('-_id').skip(pageSkip).limit(pageSize).exec(callback);
};



/**
 *  @desc 创建订单更新记录
 * */
exports.createOrderUpdateRecord = function (order_record,callback) {
    if (typeof callback != 'function') {
        callback = function () { };
    }
    let doc = {
        admin_id                :order_record._id,
        create_time             :new Date(),

        brand_id                :order_record.brand_id,
        brand_name              :order_record.brand_name,
        shop_id                 :order_record.shop_id,
        shop_name               :order_record.shop_name,
        order_id                :order_record.order_id,
        serial_number           :order_record.serial_number,

        order_state             :order_record.order_state,
        production_status       :order_record.production_status,
        order_money             :order_record.order_money,
        amount_with_children    :order_record.amount_with_children,
        order_pos_discount_money:order_record.order_pos_discount_money,
        erase_money             :order_record.erase_money,

        action_details          :order_record.action_details ||[]
    };
    OrderRecord.create(doc, callback);
};


/**
 *  @desc 创建订单支付项更新记录
 * */
exports.createOrderPaymentItemUpdateRecord = function (order_record,callback) {
    if (typeof callback != 'function') {
        callback = function () { };
    }
    let doc = {
        admin_id                :order_record._id,
        create_time             :new Date(),

        brand_id                :order_record.brand_id,
        brand_name              :order_record.brand_name,
        shop_id                 :order_record.shop_id,
        shop_name               :order_record.shop_name,
        order_id                :order_record.order_id,
        serial_number           :order_record.serial_number,

        payment_mode_id         :order_record.payment_mode_id,
        pay_value               :order_record.pay_value,


        action_details          :order_record.action_details ||[]
    };
    OrderPaymentItemRecord.create(doc, callback);
};


/**
 * 获取订单更新记录总记录
 * @param condition
 * @param callback
 */
exports.getOrderUpdateRecordTotal = function (condition,callback) {
    OrderRecord.countDocuments(condition, callback);
};

/**
 * 获取订单更新记录列表
 * @param condition
 * @param pageSkip
 * @param pageSize
 * @param callback
 */
exports.getOrderUpdateRecordList = function (condition,pageSkip,pageSize,callback) {
    OrderRecord.find(condition).populate('admin_id').sort('-_id').skip(pageSkip).limit(pageSize).exec(callback);
};


/**
 * 获取订单支付项更新记录总记录
 * @param condition
 * @param callback
 */
exports.getOrderPaymentItemUpdateRecordTotal = function (condition,callback) {
    OrderPaymentItemRecord.countDocuments(condition, callback);
};

/**
 * 获取订单支付项更新记录列表
 * @param condition
 * @param pageSkip
 * @param pageSize
 * @param callback
 */
exports.getOrderPaymentItemUpdateRecordList = function (condition,pageSkip,pageSize,callback) {
    OrderPaymentItemRecord.find(condition).populate('admin_id').sort('-_id').skip(pageSkip).limit(pageSize).exec(callback);
};