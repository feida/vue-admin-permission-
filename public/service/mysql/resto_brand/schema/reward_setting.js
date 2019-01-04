/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reward_setting', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: '您的支持是我们进步的动力!'
    },
    money_list: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '1,2,8,10,12,20'
    },
    min_level: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '5'
    },
    min_length: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '10'
    },
    is_activty: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'reward_setting'
  });
};
