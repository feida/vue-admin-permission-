/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('we_brand', {
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
    brand_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'we_brand'
  });
};
