/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('we_shop_info', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    detail_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    flag: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'we_shop_info'
  });
};
