/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_day_appraise_message', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    shop_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shop_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    week_day: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    wether: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    temperature: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    five_star: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    four_star: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    one_three_star: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    day_satisfaction: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '0%'
    },
    xun_satisfaction: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '0%'
    },
    month_satisfaction: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '0%'
    },
    red_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bad_list: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tb_day_appraise_message'
  });
};
