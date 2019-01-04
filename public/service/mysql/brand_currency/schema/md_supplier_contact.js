/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_supplier_contact', {
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
    sup_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    is_top: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    creater_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    creater_name: {
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
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    position: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    tableName: 'md_supplier_contact'
  });
};
