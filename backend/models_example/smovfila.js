const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smovfila', {
    id_fila: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estab_origem: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codprocedimento: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    profexec: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    crm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    motivo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    origem: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    data_saida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    carencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    data_validacao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'smovfila',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_fila" },
        ]
      },
      {
        name: "origem",
        using: "BTREE",
        fields: [
          { name: "estab_origem" },
        ]
      },
      {
        name: "idx_usu",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "idx_proced",
        using: "BTREE",
        fields: [
          { name: "codprocedimento" },
        ]
      },
      {
        name: "idx_status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
