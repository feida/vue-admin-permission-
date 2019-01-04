/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_customer_group', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    head_photo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_leader: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    table_number: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: '0'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
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
    tableName: 'tb_customer_group'
  });
};
