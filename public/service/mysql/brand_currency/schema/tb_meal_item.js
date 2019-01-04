/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_meal_item', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    article_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price_dif: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    meal_attr_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    article_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    kitchen_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    delete_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tb_meal_item'
  });
};
