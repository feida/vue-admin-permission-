/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_account_notice', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    account_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    notice_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'tb_account_notice'
  });
};
