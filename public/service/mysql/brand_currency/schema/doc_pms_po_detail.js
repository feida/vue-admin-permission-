/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_pms_po_detail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pms_header_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pms_header_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    sup_price_detail_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    purchase_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    purchase_tax_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    purchase_real_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    purchase_real_tax_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    received_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    received_tax_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    order_detail_status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '11'
    },
    material_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    plan_qty: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    act_qty: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    pay_status: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    unit_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    unit_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    spec_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    spec_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(256),
      allowNull: true
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
      allowNull: true,
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
    tableName: 'doc_pms_po_detail'
  });
};
