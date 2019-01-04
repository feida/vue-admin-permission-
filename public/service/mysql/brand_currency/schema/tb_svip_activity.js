/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_svip_activity', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    activity_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    begin_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    svip_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    svip_expire: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    activity_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity_img_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    activity_status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    system_img_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    svip_expire_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'tb_svip_activity'
  });
};
