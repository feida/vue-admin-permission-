/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_order_item', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    article_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    article_designation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    original_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    unit_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    base_unit_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    final_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pos_discount: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    order_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    article_id: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    meal_item_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kitchen_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    recommend_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    orgin_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    refund_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    meal_fee_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    change_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    print_fail_flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    need_remind: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    grant_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_order_item'
  });
};
