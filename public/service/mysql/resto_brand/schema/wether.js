/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wether', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    area_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    day_weather: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    night_weather: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weekady: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    day_temperature: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    night_temperature: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    city_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    day_weather_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    night_weather_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'wether'
  });
};
