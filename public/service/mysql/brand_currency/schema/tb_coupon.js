/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_coupon', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    min_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    begin_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    begin_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:01:00'
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '23:59:00'
    },
    is_used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    using_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    coupon_source: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    use_with_account: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    remark: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    distribution_mode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    add_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    coupon_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '-1'
    },
    push_day: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '3'
    },
    recommend_delay_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    new_custom_coupon_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    small_program_id: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    }
  }, {
    tableName: 'tb_coupon'
  });
};
