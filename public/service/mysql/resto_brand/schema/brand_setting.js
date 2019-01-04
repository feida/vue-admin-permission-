/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brand_setting', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    sms_sign: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: '餐加'
    },
    appraise_min_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    customer_register_title: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: '欢迎注册'
    },
    wechat_welcome_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wechat_welcome_title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    wechat_welcome_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    wechat_welcome_content: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    wechat_brand_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    wechat_home_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '首页'
    },
    wechat_tangshi_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '堂吃'
    },
    wechat_my_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '我的'
    },
    wechat_waimai_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '外卖'
    },
    wechat_customo_style: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    auto_confirm_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '900'
    },
    red_package_logo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    close_continue_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '7200'
    },
    delay_appraise_money_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '3600'
    },
    is_choice_mode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    auto_alert_appraise: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    good_appraise_length: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '10'
    },
    bad_appraise_length: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '10'
    },
    reconnect_times: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '5'
    },
    reconnect_second: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '30'
    },
    stock_working_day: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '100'
    },
    stock_weekend: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '50'
    },
    auto_print_total: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    registered_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    parasitic_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    geekpos_price: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    recommend_article: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_use_recommend: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    print_type: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_use_service_price: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    service_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    wait_red_envelope: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    base_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00000'
    },
    high_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00000'
    },
    biz_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    switch_mode: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    },
    consumer_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    consumer_secret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_allow_extra_price: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_open_out_food: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    ali_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    ali_appId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ali_public_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ali_private_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ali_seller_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ali_product_code: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    is_print_pay_after: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_meal_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_optional_photo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    slogan: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '欢迎光临'
    },
    queue_notice: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '温馨提示:尊敬的顾客,请您保管好自己的贵重物品,请根据叫号信息就号取餐,谢谢!'
    },
    wechat_charge_config_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    export_password: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: '2017'
    },
    is_send_coupon_msg: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_pos_plus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_union_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_money_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_shanhui_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_third_interface: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    appid: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    integral_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    pos_open_table: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_charge: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    into_shop_subscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    allow_appraise_subscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    qr_code_brand: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    open_andriod_apk: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_order_remark: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    call_tv_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    },
    open_shoplist: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_reminder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_https: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    recommend_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '3'
    },
    recommend_category: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_brand_account: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    turntable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    comment_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '72'
    },
    open_comment_recommend: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_push_sms: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    coupon_cd: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    open_bonus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    sms_push_gift_coupons: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    wechat_push_gift_coupons: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_discount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_open_scan_code_number: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    share_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    member_card_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    open_many_customer_order: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    consumption_rebate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_open_scm: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    template_edition: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    appraise_edition: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    trade_appid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trade_private_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trade_public_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    loading_text_color: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '#ffffff'
    },
    loading_logo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: 'http://106.14.44.167/group1/M00/02/54/ag4sp1nwKA2ARtE_AAAcjaRfcpw011.png'
    },
    loading_background: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: 'http://106.14.44.167/group1/M00/02/54/ag4sp1nwJ7WAalr_AAAHaw4yCAs370.png'
    },
    balance_reminder: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    into_where: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    order_before: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    message_switch: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    receipt_switch: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    open_compulsory_register: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_compulsory_recharge: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_ticket: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    open_group_buy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_cash_coupon_buy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_rpay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_product_coupon: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    product_coupon_push_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    open_audit: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'brand_setting'
  });
};
