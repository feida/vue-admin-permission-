/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wechat_charge_config', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
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
    wx_server_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_sub: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'wechat_charge_config'
  });
};
