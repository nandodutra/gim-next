const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabhorariohmtf', {
    periodo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: ""
    },
    coddia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    oferta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'stabhorariohmtf',
    timestamps: false
  });
};
