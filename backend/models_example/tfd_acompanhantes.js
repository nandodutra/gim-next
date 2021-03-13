const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_acompanhantes', {
    scadpessoas_codpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tfd_laudo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tfd_acompanhantes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scadpessoas_codpessoa" },
          { name: "tfd_laudo_id" },
        ]
      },
      {
        name: "scadpessoas_has_tfd_laudo_FKIndex1",
        using: "BTREE",
        fields: [
          { name: "scadpessoas_codpessoa" },
        ]
      },
      {
        name: "scadpessoas_has_tfd_laudo_FKIndex2",
        using: "BTREE",
        fields: [
          { name: "tfd_laudo_id" },
        ]
      },
    ]
  });
};
