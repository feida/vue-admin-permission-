/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_material_stock', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    material_stock_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    material_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    theory_stock_count: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    alert_stock_count: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '10.0000'
    },
    act_stock_count: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    note: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    version: {
      type: DataTypes.INTEGER(21),
      allowNull: false,
      defaultValue: '1'
    },
    creater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    creater_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    updater_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'doc_material_stock'
  });
};
