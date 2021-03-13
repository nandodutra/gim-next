const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stab_estab_proced', {
    id_vinculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    codsubgrupo: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    codprocedimento: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    codprofexec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'stab_estab_proced',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_vinculo" },
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
        name: "idx_proced",
        using: "BTREE",
        fields: [
          { name: "codprocedimento" },
        ]
      },
      {
        name: "idx_subg",
        using: "BTREE",
        fields: [
          { name: "codsubgrupo" },
        ]
      },
      {
        name: "idx_profexec",
        using: "BTREE",
        fields: [
          { name: "codprofexec" },
        ]
      },
    ]
  });
};
