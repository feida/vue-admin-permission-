/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_order_refund_remark', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    article_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    order_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    refund_remark_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    refund_remark: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    remark_supply: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    refund_count: {
      type: DataTypes.INTEGER(80),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shop_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    data_sync_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'tb_order_refund_remark'
  });
};
