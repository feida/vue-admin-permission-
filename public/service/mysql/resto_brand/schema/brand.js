/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brand', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_name: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    brand_sign: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    wechat_config_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'wechat_config',
        key: 'id'
      }
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    database_config_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    brand_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    add_user: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    update_user: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    brand_setting_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    wechat_img_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brand_index: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    server_ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    use_state: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    phone_list: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: ''
    },
    white_phone_list: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: ''
    },
    mq_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    contract_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    defined_self: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'brand'
  });
};
