/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_supplier', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sup_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    supplier_type: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    product_types: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    sup_alias_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    top_mobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    top_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    top_contact: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    sup_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    bank_account: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ''
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
    updater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    updater_name: {
      type: DataTypes.STRING(32),
      allowNull: true
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
    tax_number: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    top_position: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'md_supplier'
  });
};
