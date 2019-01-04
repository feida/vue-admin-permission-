/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_order', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    table_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    customer_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    accounting_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_state: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    production_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    original_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    reduction_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    payment_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    order_money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    article_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    serial_number: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    confirm_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    print_times: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    allow_cancel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    allow_appraise: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    operator_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    customer_address_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    pos_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    erase_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    no_discount_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    distribution_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    distribution_time_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    delivery_point_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    distribution_mode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ver_code: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    push_order_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    print_order_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    call_number_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_mode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    amount_with_children: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    parent_order_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    allow_continue_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    count_with_child: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    last_order_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    person_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    table_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    employee_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pay_mode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    service_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    eleme_order_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    base_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    base_order_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    base_customer_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    meal_fee_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    meal_all_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ali_pay_discount_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    need_scan: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    base_meal_all_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_pay: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_confirm: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_refund_order: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_get_share_coupon: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    give_change: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    is_pos_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    print_fail_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    print_kitchen_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_consumption_rebate: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    rebate_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_before: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    before_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    sauce_fee_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sauce_fee_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    towel_fee_count: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    towel_fee_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    tableware_fee_count: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    tableware_fee_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    is_use_new_service: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    pos_back_ups: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_origin: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    order_pos_discount_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    member_discount_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    member_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    need_confirm_order_item: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    reduce_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    real_erase_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    exemption_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    sync_state: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    last_sync_time: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    create_times: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_add_report: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    use_product_coupon: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    order_remark_ids: {
      type: DataTypes.STRING(720),
      allowNull: true
    }
  }, {
    tableName: 'tb_order'
  });
};
