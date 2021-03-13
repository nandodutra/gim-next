const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stab_prontuario', {
    id_prontuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    identificacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "identificacao"
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stab_prontuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prontuario" },
        ]
      },
      {
        name: "identificacao",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identificacao" },
        ]
      },
      {
        name: "id_prontuario",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prontuario" },
        ]
      },
    ]
  });
};
