/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eleme_token', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    access_token: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    token_type: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    expires_in: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    refresh_token: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    scope: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'eleme_token'
  });
};
