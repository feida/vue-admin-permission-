/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_article', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name_alias: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name_short: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    photo_big: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo_small: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ingredients: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    is_empty: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    remain_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    sale_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    show_sale_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
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
    article_family_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    create_user_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    update_user_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fans_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    has_mult_price: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    has_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    peference: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    show_big: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    control_color: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '#000'
    },
    show_desc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    is_remind: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    article_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    likes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    stock_working_day: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '100'
    },
    stock_weekend: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '50'
    },
    current_working_stock: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '100'
    },
    empty_remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recommend_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    unit_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    is_hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    pid: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    eleme_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    photo_square: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meal_fee_number: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    is_main_food: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    virtual_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    initials: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    photo_type: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '1'
    },
    photo_little: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo_super: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo_square_original: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    open_catty: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    catty_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    need_remind: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    gif_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inventory_warning: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    weight_package_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'tb_article'
  });
};
