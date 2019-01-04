/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_table_group', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    table_number: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: '0'
    },
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    create_customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'tb_table_group'
  });
};
