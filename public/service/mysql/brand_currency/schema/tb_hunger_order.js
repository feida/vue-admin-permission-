/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_hunger_order', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    consignee: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deliver_fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deliver_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    is_book: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    is_online_paid: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    order_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: true
    },
    phone_list: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    restaurant_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    restaurant_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    restaurant_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status_code: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    original_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    delivery_geo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    delivery_poi_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_print: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    print_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tb_hunger_order'
  });
};
