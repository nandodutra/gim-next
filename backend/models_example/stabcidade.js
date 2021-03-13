const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabcidade', {
    codcidade: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "IDX_stabcidade_2"
    },
    ibge: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stabcidade',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codcidade" },
        ]
      },
      {
        name: "IDX_stabcidade_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "descricao" },
        ]
      },
    ]
  });
};
