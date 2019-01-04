/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_pms_po_header', {
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
    sup_price_head_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    shop_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    order_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    order_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    order_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '11'
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
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    audit_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    audit_name: {
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
    note: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    tax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    total_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    expect_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pay_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'doc_pms_po_header'
  });
};
