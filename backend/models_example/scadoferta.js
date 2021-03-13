const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scadoferta', {
    id_oferta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codprocedimento: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    id_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    coddia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    codhorario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    profexec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    oferta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ofertapactuados: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'scadoferta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_oferta" },
        ]
      },
      {
        name: "ind_proced",
        using: "BTREE",
        fields: [
          { name: "codprocedimento" },
        ]
      },
      {
        name: "ind_estab",
        using: "BTREE",
        fields: [
          { name: "id_estabelecimento" },
        ]
      },
      {
        name: "idx_dia",
        using: "BTREE",
        fields: [
          { name: "coddia" },
        ]
      },
      {
        name: "idx_profexec",
        using: "BTREE",
        fields: [
          { name: "profexec" },
        ]
      },
    ]
  });
};
