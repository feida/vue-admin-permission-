/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('we_item', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shop_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    item_count: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    item_total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    item_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'we_item'
  });
};
