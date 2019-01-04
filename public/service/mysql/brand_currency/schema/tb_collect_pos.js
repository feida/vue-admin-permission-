/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_collect_pos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    new_order_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    new_shop_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    creat_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    text1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    third_party_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'tb_collect_pos'
  });
};
