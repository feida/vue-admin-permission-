/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_free_day', {
    free_day: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tb_free_day'
  });
};
