/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('we_shop', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    shop_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    shop_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'we_shop'
  });
};
