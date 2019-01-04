/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_article_unit_new', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    article_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    unit_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    choice_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_article_unit_new'
  });
};
