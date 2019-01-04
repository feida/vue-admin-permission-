/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mqtt_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    broker: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secretKey: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    acessKey: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    topic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    client_Id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    server_ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    use_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'mqtt_config'
  });
};
