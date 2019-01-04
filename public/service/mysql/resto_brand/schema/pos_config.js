/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pos_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    client_ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    server_ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pos_web_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    used_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'pos_config'
  });
};
