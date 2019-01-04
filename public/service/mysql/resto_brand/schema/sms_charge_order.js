/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_charge_order', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    order_status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    push_order_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    charge_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sms_unit_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    number: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    trade_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticket_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    pay_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'sms_charge_order'
  });
};
