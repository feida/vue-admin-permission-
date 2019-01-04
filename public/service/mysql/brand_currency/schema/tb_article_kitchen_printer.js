/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_article_kitchen_printer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    article_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    kitchen_group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    shop_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    delete_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'tb_article_kitchen_printer'
  });
};
