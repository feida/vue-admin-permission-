/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_recommend_article', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recommend_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    article_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    max_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    article_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    kitchen_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    delete_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tb_recommend_article'
  });
};
