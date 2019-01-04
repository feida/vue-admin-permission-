/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_kitchen', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    printer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    ciprinter_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    begin_time: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    end_time: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    delete_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tb_kitchen'
  });
};
