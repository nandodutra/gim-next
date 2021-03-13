const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabdataano', {
    dataano: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      primaryKey: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    usado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    usadoRadio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    usadoUltra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    usadoAudio: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stabdataano',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dataano" },
        ]
      },
    ]
  });
};
