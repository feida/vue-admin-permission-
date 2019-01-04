/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_role_permission', {
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    permission_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'sys_role_permission'
  });
};
