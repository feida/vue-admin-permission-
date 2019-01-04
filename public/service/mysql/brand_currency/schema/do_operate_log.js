/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('do_operate_log', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    do_header_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    order_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    operate_type: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    operate_reason: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    fm_param: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    to_param: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    operator_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    operator_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'do_operate_log'
  });
};
