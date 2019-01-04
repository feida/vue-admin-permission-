/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    constract_num: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    brand_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shop_num: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    sign_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shop_names: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sign_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    a_company_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '上海餐加企业管理有限公司'
    },
    a_signtory: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    a_telephone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    a_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    b_company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    b_signtory: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    b_telephone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    b_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    charge_mode: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    receive_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    unreceive_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    year_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    online_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expiration_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    validity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sms_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account_balance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    used_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    open_new_customer_register: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    new_customer_value: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    open_send_sms: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    send_sms_value: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    open_all_order: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    all_order_value: {
      type: "DOUBLE(10,2)",
      allowNull: true,
      defaultValue: '3.00'
    },
    open_back_customer_order: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    back_customer_order_value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    open_out_food_order: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    out_food_order_value: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '3.00'
    },
    open_third_food_order: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    third_food_order_value: {
      type: "DOUBLE(10,2)",
      allowNull: true,
      defaultValue: '3.00'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_user: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    invoice_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    has_invoice_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'contract'
  });
};
