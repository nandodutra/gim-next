const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stab_pact_proced', {
    codpact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    codprocedimento: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    descricao: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    ofertames: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    vlmesppi: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: true,
      defaultValue: 0.00
    },
    idCota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'stab_pact_proced',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCota" },
        ]
      },
      {
        name: "idx_pact",
        using: "BTREE",
        fields: [
          { name: "codpact" },
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
