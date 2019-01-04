/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('electronic_ticket_config', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    appKey: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    appSecret: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    wechat_pay_num: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bank_num: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payee_register_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    payee_checker: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payee_receiver: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payee_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    authorization_key: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'electronic_ticket_config'
  });
};
