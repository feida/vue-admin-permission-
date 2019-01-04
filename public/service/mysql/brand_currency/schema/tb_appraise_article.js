/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_appraise_article', {
    appraise_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    article_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tb_appraise_article'
  });
};
