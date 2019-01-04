/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_peak', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    after_begin_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    after_end_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    even_begin_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    even_end_time: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'tb_peak'
  });
};
