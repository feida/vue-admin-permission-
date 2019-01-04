/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_charge_order', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    charge_money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    reward_money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    order_state: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    finish_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    charge_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    reward_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    total_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    number_day_now: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '1'
    },
    arrival_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    end_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    charge_setting_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    tableName: 'tb_charge_order'
  });
};
