/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_return_header', {
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
    supplier_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    order_name: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    auditor: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'doc_return_header'
  });
};
