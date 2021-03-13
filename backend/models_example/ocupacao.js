const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocupacao', {
    co_ocupacao: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    no_ocupacao: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ocupacao',
    timestamps: false
  });
};
