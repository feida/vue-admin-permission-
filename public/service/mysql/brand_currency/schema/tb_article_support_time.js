/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_article_support_time', {
    article_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    support_time_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'tb_article_support_time'
  });
};
