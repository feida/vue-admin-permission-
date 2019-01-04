/**
 * @author wxh on 2018/12/4
 * @copyright
 * @desc
 */
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


//订单表===================================================
const TbOrderSchema = new Schema({
    id                      : {type: String,  required: false},       //newpos ID
    table_number            : {type: String,  required: false},       //桌号
    customer_count          : {type: Number,  required: false},       //
    accounting_time         : {type: String,  required: false},       //
    order_state             : {type: Number,  required: false},       //
    production_status       : {type: Number,  required: false},       //
    original_amount         : {type: Number,  required: false},       //
    order_money             : {type: Number,  required: false},       //
    origin_money            : {type: Number,  required: false},       //
    article_count           : {type: Number,  required: false},       //
    serial_number           : {type: String,  required: false},       //
    allow_cancel            : {type: Number,  required: false},       //
    closed                  : {type: Number,  required: false},       //
    push_order_time         : {type: String,  required: false},       //
    print_order_time        : {type: String,  required: false},       //
    remark                  : {type: String,  required: false},       //
    distribution_mode_id    : {type: Number,  required: false},       //
    amount_with_children    : {type: Number,  required: false},       //
    parent_order_id         : {type: String,  required: false},       //
    service_price           : {type: Number,  required: false},       //
    is_pos_pay              : {type: Number,  required: false},       //
    pay_type                : {type: Number,  required: false},       //
    count_with_child        : {type: Number,  required: false},       //
    allow_continue_order    : {type: Number,  required: false},       //
    payment_amount          : {type: Number,  required: false},       //
    customer_id             : {type: String,  required: false},       //
    customer_address_id     : {type: String,  required: false},       //
    ver_code                : {type: String,  required: false},       //
    pay_mode                : {type: Number,  required: false},       //
    meal_fee_price          : {type: Number,  required: false},       //
    meal_all_number         : {type: Number,  required: false},       //
    order_mode              : {type: Number,  required: false},       //
    allow_appraise          : {type: Number,  required: false},       //
    confirm_time            : {type: String,  required: false},       //
    order_number            : {type: Number,  required: false},       //
    call_number_time        : {type: String,  required: false},       //
    call_times              : {type: Number,  required: false},       //
    shop_detail_id          : {type: String,  required: false},       //
    data_origin             : {type: String,  required: false},       //
    sync_state              : {type: Number,  required: false},       //
    last_sync_time          : {type: String,  required: false},       //
    order_pos_discount_money: {type: String,  required: false},       //
    member_discount_money   : {type: String,  required: false},       //
    erase_money             : {type: String,  required: false},       //
    reduce_money            : {type: String,  required: false},       //
    real_erase_money        : {type: String,  required: false},       //
    pos_discount            : {type: String,  required: false},       //
    no_discount_money       : {type: String,  required: false},       //
    exemption_money         : {type: String,  required: false},       //
    need_confirm_order_item : {type: Number,  required: false},       //
    sauce_fee_count         : {type: String,  required: false},       //
    sauce_fee_price         : {type: Number,  required: false},       //
    towel_fee_count         : {type: String,  required: false},       //
    towel_fee_price         : {type: Number,  required: false},       //
    tableware_fee_count     : {type: String,  required: false},       //
    tableware_fee_price     : {type: Number,  required: false},       //
    is_use_new_service      : {type: Number,  required: false},       //

    create_time             : {type: String,  required: false},     //创建时间

    brand_id                : {type: String,  required: false},       //

    update_time             : {type: Date,    required: false},     //更新时间
});


//订单菜品表===================================================
const TbOrderItemSchema = new Schema({
    id                      : {type: String,  required: false},        //
    order_id                : {type: String,  required: false},        //
    article_id              : {type: String,  required: false},        //
    article_name            : {type: String,  required: false},        //
    count                   : {type: Number,  required: false},        //
    original_price          : {type: Number,  required: false},        //
    no_discount_price       : {type: Number,  required: false},        //
    unit_price              : {type: Number,  required: false},        //
    final_price             : {type: Number,  required: false},        //
    remark                  : {type: String,  required: false},        //
    sort                    : {type: Number,  required: false},        //
    status                  : {type: Number,  required: false},        //
    type                    : {type: Number,  required: false},        //
    parent_id               : {type: String,  required: false},        //
    meal_item_id            : {type: String,  required: false},        //
    kitchen_id              : {type: String,  required: false},        //
    recommend_id            : {type: String,  required: false},        //
    orgin_count             : {type: Number,  required: false},        //
    refund_count            : {type: Number,  required: false},        //
    grant_count             : {type: Number,  required: false},        //
    meal_fee_number         : {type: Number,  required: false},        //
    change_count            : {type: Number,  required: false},        //
    print_fail_flag         : {type: Number,  required: false},        //
    pos_discount            : {type: Number,  required: false},        //
    weight                  : {type: Number,  required: false},        //
    need_remind             : {type: Number,  required: false},        //

    create_time             : {type: String,  required: false},         //创建时间

    brand_id                : {type: String,  required: false},       //
    shop_detail_id          : {type: String,  required: false},       //

    update_time             : {type: Date,    required: false},     //更新时间
});




//订单支付表===================================================
const TbOrderPaymentItemSchema = new Schema({
    id                      : {type: String,  required: false},        //
    order_id                : {type: String,  required: false},        //
    payment_mode_id         : {type: Number,  required: false},        //
    pay_value               : {type: Number,  required: false},        //
    pay_time                : {type: String,  required: false},        //
    remark                  : {type: String,  required: false},        //
    result_data             : {type: String,  required: false},        //
    is_use_bonus            : {type: Number,  required: false},        //
    to_pay_id               : {type: String,  required: false},        //

    brand_id                : {type: String,  required: false},       //
    shop_detail_id          : {type: String,  required: false},       //

    update_time             : {type: Date,    required: false},     //更新时间
});

exports.TbOrderSchema = TbOrderSchema;
exports.TbOrderItemSchema = TbOrderItemSchema;
exports.TbOrderPaymentItemSchema = TbOrderPaymentItemSchema;
