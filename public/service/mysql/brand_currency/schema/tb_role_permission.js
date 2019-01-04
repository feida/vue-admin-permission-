/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_role_permission', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    permission_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'tb_role_permission'
  });
};
