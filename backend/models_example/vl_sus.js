const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vl_sus', {
    codproc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    vlr_tota: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vl_sus',
    timestamps: false
  });
};
