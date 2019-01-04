/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_new_custom_coupon', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coupon_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    coupon_validay: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    coupon_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    use_with_account: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    coupon_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    coupon_min_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
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
    is_activty: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    distribution_mode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    time_cons_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    begin_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    coupon_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '-1'
    },
    is_brand: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
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
    distance_birthday_day: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    real_time_coupon_begin_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    real_time_coupon_end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    minimum_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    next_hour: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    coupon_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'tb_new_custom_coupon'
  });
};
