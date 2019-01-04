/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_collect_product_item', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    new_product_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    product_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    collect_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    creat_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    text1: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    text2: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'tb_collect_product_item'
  });
};
