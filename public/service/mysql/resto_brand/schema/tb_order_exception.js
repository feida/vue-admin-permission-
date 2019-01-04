/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_order_exception', {
    id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orderId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    orderMoney: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    why: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brandName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shopName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_order_exception'
  });
};
