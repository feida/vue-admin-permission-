/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_customer', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    wechat_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true
    },
    head_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    default_delivery_point: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_bind_phone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    regiest_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    first_order_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_login_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    sex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '2'
    },
    province: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_order_shop: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    new_notice_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    share_customer: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    register_shop_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    is_now_register: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_share: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    bind_phone_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bind_phone_shop: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    real_time_coupon_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    last_table_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    birthday_coupon_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    share_coupon_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    serial_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    share_link: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    card_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    union_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tb_customer'
  });
};
