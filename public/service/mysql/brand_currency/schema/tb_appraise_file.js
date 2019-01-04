/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_appraise_file', {
    id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    appraise_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    file_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shop_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    photo_square: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tb_appraise_file'
  });
};
