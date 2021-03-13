const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relat_fin', {
    data_sistema: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estab_origem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codprocedimento: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    codestabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vlsus: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'relat_fin',
    timestamps: false,
    indexes: [
      {
        name: "ind_data",
        using: "BTREE",
        fields: [
          { name: "data" },
        ]
      },
      {
        name: "ind_local",
        using: "BTREE",
        fields: [
          { name: "estab_origem" },
        ]
      },
      {
        name: "ind_proc",
        using: "BTREE",
        fields: [
          { name: "codprocedimento" },
        ]
      },
      {
        name: "idx_estab",
        using: "BTREE",
        fields: [
          { name: "codestabelecimento" },
        ]
      },
    ]
  });
};
