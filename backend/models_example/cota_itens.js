const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cota_itens', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cotas_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    scad_estabelecimento_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codprocedimento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cota_itens',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_conta_itens_cotas_idx",
        using: "BTREE",
        fields: [
          { name: "cotas_id" },
        ]
      },
      {
        name: "fk_cota_itens_scad_estabelecimento1_idx",
        using: "BTREE",
        fields: [
          { name: "scad_estabelecimento_id" },
        ]
      },
      {
        name: "fk_cota_itens_stab_procedimento1_idx",
        using: "BTREE",
        fields: [
          { name: "codprocedimento" },
        ]
      },
    ]
  });
};
