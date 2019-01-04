/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_appraise', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    picture_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    feedback: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    red_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    article_id: {
      type: DataTypes.STRING(600),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    feedback_article: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'tb_appraise'
  });
};
