/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('md_bill', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bill_number: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    shop_detail_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stock_plan_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stock_plan_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stock_plan_number: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    bill_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    supplier_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    supplier_tax: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: false
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    create_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    update_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    update_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '1'
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'md_bill'
  });
};
