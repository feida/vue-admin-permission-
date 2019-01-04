/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_employee', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    sex: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    create_user: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_login_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    qr_code: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    tableName: 'tb_employee'
  });
};
