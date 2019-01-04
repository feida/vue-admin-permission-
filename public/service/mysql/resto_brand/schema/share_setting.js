/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('share_setting', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    share_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '分享标题'
    },
    share_icon: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    min_level: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '5'
    },
    min_length: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '10'
    },
    dialog_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rebate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '1.00'
    },
    is_activity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    brand_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    min_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '2.00'
    },
    max_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '100.00'
    },
    register_button: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '领取红包'
    },
    delay_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '120'
    },
    open_multiple_rebates: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    after_rebate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    after_min_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    after_max_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'share_setting'
  });
};
