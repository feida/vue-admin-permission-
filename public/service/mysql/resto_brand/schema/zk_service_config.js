/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zk_service_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    zk_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    service_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_used: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    ali_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tttt: {
      type: DataTypes.STRING(22),
      allowNull: true,
      defaultValue: 's'
    }
  }, {
    tableName: 'zk_service_config'
  });
};
