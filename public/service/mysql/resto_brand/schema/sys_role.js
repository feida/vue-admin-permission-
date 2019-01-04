/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_role', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role_sign: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    user_group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'sys_role'
  });
};
