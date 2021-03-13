const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_cidade', {
    cod_cidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_estado: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nom_cidade: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tfd_cidade',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_cidade" },
        ]
      },
      {
        name: "fk_cod_estado_cidade",
        using: "BTREE",
        fields: [
          { name: "cod_estado" },
        ]
      },
    ]
  });
};
