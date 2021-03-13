const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stab_bpa', {
    id_estabelecimento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    profexec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    codprocedimento: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    qtdd: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    vlsus: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: false,
      defaultValue: 0.00
    },
    valor: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: false,
      defaultValue: 0.00
    },
    periodo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    data_salv: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "criado em 01 de fev de 2008"
    }
  }, {
    sequelize,
    tableName: 'stab_bpa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_estabelecimento" },
          { name: "codprocedimento" },
          { name: "periodo" },
          { name: "profexec" },
          { name: "ano" },
        ]
      },
      {
        name: "idx_periodo",
        using: "BTREE",
        fields: [
          { name: "periodo" },
        ]
      },
      {
        name: "idx_estab",
        using: "BTREE",
        fields: [
          { name: "id_estabelecimento" },
        ]
      },
      {
        name: "idx_profexec",
        using: "BTREE",
        fields: [
          { name: "profexec" },
        ]
      },
      {
        name: "idx_proced",
        using: "BTREE",
        fields: [
          { name: "codprocedimento" },
        ]
      },
    ]
  });
};
