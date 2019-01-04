/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_svip_charge_item', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    payment_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pay_data: {
      type: DataTypes.TEXT,
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
    tableName: 'tb_svip_charge_item'
  });
};
