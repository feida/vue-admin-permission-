/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wxserver_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    appid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    appsecret: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mchid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mchkey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pay_cert_path: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deleted_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'wxserver_config'
  });
};
