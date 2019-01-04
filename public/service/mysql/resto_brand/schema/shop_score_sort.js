/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop_score_sort', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    shop_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    shop_score: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'shop_score_sort'
  });
};
