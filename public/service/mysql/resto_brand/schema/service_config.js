/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    service_ip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    service_port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    service_user: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    service_pwd: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    is_used: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    created_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'service_config'
  });
};
