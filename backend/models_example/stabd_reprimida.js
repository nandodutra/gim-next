const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabd_reprimida', {
    iddemanda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_sistema: {
      type: DataTypes.DATE,
      allowNull: true
    },
    codpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codprocedimento: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estab_origem: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codestabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    profexec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codhorario: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stabd_reprimida',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iddemanda" },
        ]
      },
      {
        name: "idx_pessoa",
        using: "BTREE",
        fields: [
          { name: "codpessoa" },
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
