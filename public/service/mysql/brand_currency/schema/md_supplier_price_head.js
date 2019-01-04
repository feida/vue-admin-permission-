/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_supplier_price_head', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    supplier_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    sup_status: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: '11'
    },
    contact_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    price_no: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    material_types: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_effect: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    end_effect: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_effect: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    version: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
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
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    tax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'md_supplier_price_head'
  });
};
