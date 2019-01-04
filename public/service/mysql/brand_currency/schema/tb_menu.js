/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_menu', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    menu_type: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    menu_version: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    menu_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_user: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    update_user: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    menu_cycle: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    menu_state: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'tb_menu'
  });
};
