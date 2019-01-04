/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_user', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    telephone: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_user'
  });
};
