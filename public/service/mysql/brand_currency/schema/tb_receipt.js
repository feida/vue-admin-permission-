/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_receipt', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pay_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    receipt_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    receipt_title_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(1),
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
    payee_register_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    serial_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ticket_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    ticket_url: {
      type: DataTypes.STRING(225),
      allowNull: true
    }
  }, {
    tableName: 'tb_receipt'
  });
};
