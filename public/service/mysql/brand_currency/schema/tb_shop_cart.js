/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_shop_cart', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    article_id: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ''
    },
    distribution_mode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    shop_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kitchen_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    attr_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    recommendId: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    recommend_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    recommend_article_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    unit_new_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    weight_package_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'tb_shop_cart'
  });
};
