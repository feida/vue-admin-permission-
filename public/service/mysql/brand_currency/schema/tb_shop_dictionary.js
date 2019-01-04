/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_shop_dictionary', {
    resto_shopId: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    resto_shop_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    weqian_shopId: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'tb_shop_dictionary'
  });
};
