/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('other_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    config_sign: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    config_name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    config_remark: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'other_config'
  });
};
