/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_token', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    token: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sign: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    userid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    updatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_token'
  });
};
