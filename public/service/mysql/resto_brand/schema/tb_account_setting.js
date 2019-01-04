/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_account_setting', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    account_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    brand_setting_id: {
      type: DataTypes.STRING(155),
      allowNull: false
    },
    open_new_customer_register: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    new_customer_value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    open_send_sms: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    send_sms_value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.10'
    },
    open_all_order: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    all_order_value: {
      type: "DOUBLE(10,2)",
      allowNull: false,
      defaultValue: '3.00'
    },
    open_back_customer_order: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    back_customer_order_value: {
      type: "DOUBLE(10,2)",
      allowNull: false,
      defaultValue: '3.00'
    },
    open_out_food_order: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    out_food_order_value: {
      type: "DOUBLE(10,2)",
      allowNull: false,
      defaultValue: '3.00'
    },
    open_third_food_order: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    third_food_order_value: {
      type: "DOUBLE(10,2)",
      allowNull: false,
      defaultValue: '3.00'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_account_setting'
  });
};
