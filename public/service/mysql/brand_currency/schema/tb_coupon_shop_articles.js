/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_coupon_shop_articles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    shop_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    article_family_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    article_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    coupon_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    tableName: 'tb_coupon_shop_articles'
  });
};
