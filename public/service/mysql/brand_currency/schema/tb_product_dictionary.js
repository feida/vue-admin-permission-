/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_product_dictionary', {
    resto_productId: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    weiqian_product: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    weiqian_shopId: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'tb_product_dictionary'
  });
};
