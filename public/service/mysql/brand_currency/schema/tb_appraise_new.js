/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_appraise_new', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    order_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    all_grade: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    red_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    level: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    feedback: {
      type: DataTypes.STRING(500),
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
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    delete_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'tb_appraise_new'
  });
};
