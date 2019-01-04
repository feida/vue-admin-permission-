/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_charge_payment', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    payment_money: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pay_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    charge_order_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    is_use_bonus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_charge_payment'
  });
};
