/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_return_detail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    return_header_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    return_header_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    line_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: '11'
    },
    return_count: {
      type: DataTypes.INTEGER(16),
      allowNull: true,
      defaultValue: '0'
    },
    material_id: {
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
    tableName: 'doc_return_detail'
  });
};
