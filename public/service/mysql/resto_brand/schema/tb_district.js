/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_district', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    district_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    zip_code: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'tb_district'
  });
};
