/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('database_config', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    driver_class_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'com.mysql.jdbc.Driver'
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'NJMN2IbZbjM.'
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'u2caD3M7IfjHZGzfrTS1Iw..'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'database_config'
  });
};
