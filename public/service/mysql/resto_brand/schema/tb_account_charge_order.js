/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_account_charge_order', {
    id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    brand_id: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    order_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    push_order_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    charge_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    trade_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pay_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'tb_account_charge_order'
  });
};
