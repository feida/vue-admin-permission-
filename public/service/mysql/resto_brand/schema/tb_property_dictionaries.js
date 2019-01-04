/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_property_dictionaries', {
    id: {
      type: DataTypes.INTEGER(32),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dic_key: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    dic_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'tb_property_dictionaries'
  });
};
