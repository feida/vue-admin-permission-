/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_stock_count_header', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    order_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    order_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '11'
    },
    method_type: {
      type: DataTypes.STRING(32),
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
    updater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    updater_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    stock_count_start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stock_count_end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    adjust_stock_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_recheck: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    is_blind: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    note: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'doc_stock_count_header'
  });
};
