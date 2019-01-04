/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop_tv_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true
    },
    brand_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ready_back_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    take_meal_back_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    call_back_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tv_background: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    number_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    call_number_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    text: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    label_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'shop_tv_config'
  });
};
