/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_stk_in_plan_header', {
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
    pms_header_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    shop_detail_id: {
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
      type: DataTypes.STRING(16),
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
    published_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    published_name: {
      type: DataTypes.STRING(32),
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
    confirm_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirm_name: {
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
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'doc_stk_in_plan_header'
  });
};
