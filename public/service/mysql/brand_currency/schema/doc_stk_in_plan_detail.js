/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_stk_in_plan_detail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stk_in_header_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    stk_in_header_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    sup_price_detail_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pms_detail_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    order_detail_status: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: '11'
    },
    material_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    plan_qty: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    act_qty: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    unit_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    unit_name: {
      type: DataTypes.STRING(32),
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
    },
    purchase_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    }
  }, {
    tableName: 'doc_stk_in_plan_detail'
  });
};
