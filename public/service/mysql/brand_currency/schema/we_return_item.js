/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('we_return_item', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    return_item_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    return_item_count: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    return_item_total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'we_return_item'
  });
};
