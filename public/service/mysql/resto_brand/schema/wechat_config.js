/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wechat_config', {
    id: {
      type: DataTypes.STRING(36),
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
    card_id: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'wechat_config'
  });
};
