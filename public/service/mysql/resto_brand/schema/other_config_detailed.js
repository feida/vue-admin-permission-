/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('other_config_detailed', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    other_config_sign: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'other_config_detailed'
  });
};
