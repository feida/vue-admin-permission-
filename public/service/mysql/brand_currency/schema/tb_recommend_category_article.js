/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_recommend_category_article', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    article_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    recommend_sort: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    recommend_category_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    article_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_recommend_category_article'
  });
};
