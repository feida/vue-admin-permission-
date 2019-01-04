/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('income', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    contract_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pay_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    pay_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    pay_account: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pay_serialnumber: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pay_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'income'
  });
};
