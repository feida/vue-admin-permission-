/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brand_module_list', {
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    module_list_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'brand_module_list'
  });
};
