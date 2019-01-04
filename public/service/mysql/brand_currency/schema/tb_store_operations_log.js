/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_store_operations_log', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    brand_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    shop_Id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    shop_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    stores_code: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    operation_people: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    operation_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    daily_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cash_audit_status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    upload_jde_status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    message_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    print_report_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    log_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_store_operations_log'
  });
};
