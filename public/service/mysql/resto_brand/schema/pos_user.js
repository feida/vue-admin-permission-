/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pos_user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pass_word: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'pos_user'
  });
};
