/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_card_customer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    card_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    star_card_id: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    id_card: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    customer_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    discount_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    charge_setting_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    company_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    card_state: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    created_at: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    delete_flag: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    created_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    update_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'tb_card_customer'
  });
};
