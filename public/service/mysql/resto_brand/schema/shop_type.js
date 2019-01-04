/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop_type', {
    id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'shop_type'
  });
};
