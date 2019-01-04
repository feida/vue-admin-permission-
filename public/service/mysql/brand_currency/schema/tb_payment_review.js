/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_payment_review', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    shop_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    payment_mode_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    report_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    audit_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    daily_log_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    close_shop_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    serial_number: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'tb_payment_review'
  });
};
