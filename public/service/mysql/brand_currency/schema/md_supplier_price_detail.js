/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_supplier_price_detail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    material_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    material_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    sup_detail_status: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: '11'
    },
    sup_price_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sup_price_no: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    purchase_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    version: {
      type: DataTypes.INTEGER(1),
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
    supplier_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    tableName: 'md_supplier_price_detail'
  });
};
