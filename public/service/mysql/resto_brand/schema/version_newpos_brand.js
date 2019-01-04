/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('version_newpos_brand', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    version_no: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    download_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    version_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    voluntarily: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'version_newpos_brand'
  });
};
