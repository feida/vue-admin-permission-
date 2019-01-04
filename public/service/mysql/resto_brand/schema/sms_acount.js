/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_acount', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    sms_sign: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    remainder_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    used_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    sms_unit_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.10'
    },
    total_amcount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    used_amcount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    remainer_amcount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    sms_remind: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sms_notice_telephone: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    tableName: 'sms_acount'
  });
};
