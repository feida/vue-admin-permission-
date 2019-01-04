/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop_detail', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    open_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    close_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    shop_mode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    add_user: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    add_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    update_user: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    is_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wait_red_envelope: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    pos_waitred_envelope: {
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
    shop_detail_index: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    restaurant_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    geekpos_queue_islogin: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    geekpos_queue_last_login_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ali_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ali_seller_id: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    ali_pay_discount: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '100'
    },
    ali_encrypt: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    appid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    appsecret: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mchid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mchkey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pay_cert_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wx_server_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_meal_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    meal_fee_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meal_fee_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    super_pwd: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    appraise_min_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    auto_confirm_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '900'
    },
    close_continue_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '7200'
    },
    is_choice_mode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    auto_alert_appraise: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    good_appraise_length: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '10'
    },
    bad_appraise_length: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '10'
    },
    auto_print_total: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    is_use_recommend: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    print_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    is_print_pay_after: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    is_use_service_price: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    service_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    slogan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    queue_notice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_push: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    push_context: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    push_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_new_qrcode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_user_identity: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    consume_number: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0'
    },
    is_sub: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    wait_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    wait_unit: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '2'
    },
    time_out: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    consume_confine_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    consume_confine_unit: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    continue_order_scan: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    print_receipt: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    print_kitchen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_open_sms: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    notice_telephone: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    day_sms_type: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: '3'
    },
    is_use_service_prices: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    service_prices: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    service_names: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shop_index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    recommend_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '3'
    },
    allow_after_pay: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    allow_first_pay: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    app_key: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    app_master_secret: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    device_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rolling_switch: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    sweep_mode: {
      type: DataTypes.INTEGER(1),
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
    pos_plus_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    open_shanhui_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    dazhong_shop_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dazhong_app_auth_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    third_appid: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    integral_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    print_meituan: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    pos_open_table: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_ali_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_union_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_money_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_shanhui_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_integral_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_charge: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    tv_mode: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    begin_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    end_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '86400'
    },
    modify_order_print_receipt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    modify_order_print_kitchen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_pay_order: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    tv_apk_version: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '{\"version\":\"1.0\",\"describe\":\"初始版本\",\"url\":\"http://192.168.1.56:8080/test.apk\"}'
    },
    open_order_remark: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    is_pos_new: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    page_size: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_wechat_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    auto_print_error: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    tv_ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wait_ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    template_type: {
      type: "BIT(2)",
      allowNull: true,
      defaultValue: 'b\'0\''
    },
    split_kitchen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    tv_text_color: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tv_background: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tv_textbox_background: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tv_head_text_color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tv_number_color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wait_jiaohao: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '感谢您的耐心等待，现已为您准备好舒适餐位，请前往就餐！'
    },
    wait_jiucan: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '终于等到您，赶紧就坐下单吧！'
    },
    wait_guohao: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '您的号码已过号，欢迎下次再来！'
    },
    wait_remind_switch: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    wait_remind_number: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '2'
    },
    wait_remind_text: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '太好了，马上就可以用餐了，请您提前做好准备哦！'
    },
    is_recommend_category: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    open_meituan: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    mq_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_turntable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    turntable_print_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    open_bad_appraise_print_order: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    bad_appraise_print_kitchen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    bad_appraise_print_receipt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    information_picture: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: 'http://106.14.44.167/group1/M00/01/A8/ag4sp1mBl2WAGZ9MAACvoJXDeuA287.png'
    },
    article_photo: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0'
    },
    is_takeout: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    pos_version: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    pos_key: {
      type: DataTypes.STRING(32),
      allowNull: true
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
    apart: {
      type: "DOUBLE(10,2)",
      allowNull: true,
      defaultValue: '3.00'
    },
    open_consumer_rebate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    rebate_participation: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0'
    },
    rebate_delay_delivery_time: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0'
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
    rebate_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    open_bad_warning: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    warning_key: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: '病,拉肚子,发烧,吊水,打针,吃药,举报,医,就医,医院'
    },
    warning_wechat: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    warning_sms: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    order_before: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    service_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    tableware_fee_name: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: '餐具费'
    },
    tableware_fee_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    is_open_tableware_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    towel_fee_name: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: '纸巾费'
    },
    towel_fee_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    is_open_towel_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    sauce_fee_name: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: '酱料费'
    },
    sauce_fee_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    is_open_sauce_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    shop_tag: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    fans_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '粉丝价'
    },
    order_welcome_message: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '谢谢光临，欢迎再次惠顾'
    },
    shop_type: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    auto_print_consume_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    auto_print_checkout_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    enable_duodongxian: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
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
    open_pos_group_buy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_pos_cash_coupon_buy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    open_rpay: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    print_out_details: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'shop_detail'
  });
};
