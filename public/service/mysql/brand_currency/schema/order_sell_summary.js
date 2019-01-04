/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_sell_summary', {
    articleId: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    articleName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    totalCount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mealFeeNumber: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'order_sell_summary'
  });
};
