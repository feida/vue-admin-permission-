/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_experience', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    show_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pic_url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    shop_detail_id: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    photo_square: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    show_sort: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'tb_experience'
  });
};
