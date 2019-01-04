/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_role', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'tb_role'
  });
};
