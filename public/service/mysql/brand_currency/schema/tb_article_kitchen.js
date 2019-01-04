/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_article_kitchen', {
    article_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    kitchen_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tb_article_kitchen'
  });
};
