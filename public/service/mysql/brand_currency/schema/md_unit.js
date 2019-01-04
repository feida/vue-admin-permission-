/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_unit', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    unit_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    unit_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: false
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'md_unit'
  });
};
