/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_show_photo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    show_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '2'
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pic_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    photo_square: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    show_sort: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'tb_show_photo'
  });
};
