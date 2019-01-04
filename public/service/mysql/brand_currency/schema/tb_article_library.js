/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_article_library', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    serial_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    distribution_mode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    initials: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    article_family_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    article_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    photo_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    photo_little: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo_small: {
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
    gif_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fans_price: {
      type: DataTypes.DECIMAL,
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
    inventory_warning: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    stock_working_day: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '100'
    },
    stock_weekend: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '100'
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_user: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    update_user: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    show_big: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    show_desc: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    control_color: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '#000'
    },
    likes: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    meal_fee_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    recommend_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    unit_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    weight_package_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    recommendation_degree: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    meal_out_time: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    article_kind: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    article_label: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    article_hot: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    article_component: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'tb_article_library'
  });
};
