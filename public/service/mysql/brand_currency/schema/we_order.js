/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('we_order', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'we_order'
  });
};
