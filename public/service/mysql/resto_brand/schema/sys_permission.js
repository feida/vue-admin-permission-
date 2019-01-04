/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_permission', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    is_menu: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    menu_icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    permission_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    permission_sign: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sys_permission',
        key: 'id'
      }
    },
    menu_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_group_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'sys_permission'
  });
};
