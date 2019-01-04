/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_error', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    error_msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_fixed: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    api_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    error_type: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'sys_error'
  });
};
