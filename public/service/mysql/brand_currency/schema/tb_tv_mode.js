/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tv_mode', {
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    app_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_master_secret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_source: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    last_logon_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tb_tv_mode'
  });
};
