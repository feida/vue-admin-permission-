/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_meal_temp', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'tb_meal_temp'
  });
};
