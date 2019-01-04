/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_rul_article_bom_head', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bom_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    article_family_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    article_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    product_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    product_category: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    measurement_unit: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    creater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    creater_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    priority: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    state: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    start_effect: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    end_effect: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    max_version: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    },
    producer: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'md_rul_article_bom_head'
  });
};
