/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_stock_count_detail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stock_count_header_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    stock_count_header_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    line_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: '11'
    },
    material_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    is_damaged: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    theory_stock_count: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    available_stock_count: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000'
    },
    act_stock_count: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    defferent_reason: {
      type: DataTypes.STRING(32),
      allowNull: true
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
    },
    stock_count_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stock_count_user_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'doc_stock_count_detail'
  });
};
