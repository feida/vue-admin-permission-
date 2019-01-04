/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_category', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    category_desc: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    category_hierarchy: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_leaf: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    active_status: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
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
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    keyword: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'md_category'
  });
};
