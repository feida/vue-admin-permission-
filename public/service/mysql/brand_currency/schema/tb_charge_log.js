/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_charge_log', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    operation_phone: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    customer_phone: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    shop_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charge_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    charge_order_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    tableName: 'tb_charge_log'
  });
};
