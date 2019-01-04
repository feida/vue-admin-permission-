/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_province', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    province_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    zip_code: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'tb_province'
  });
};
