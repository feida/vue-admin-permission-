/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_platform_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    platform_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'tb_platform_config'
  });
};
