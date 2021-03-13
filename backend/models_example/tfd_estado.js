const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_estado', {
    cod_estado: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    cod_pais: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    sgl_estado: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    nom_estado: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tfd_estado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_estado" },
        ]
      },
      {
        name: "fk_cod_pais_estado",
        using: "BTREE",
        fields: [
          { name: "cod_pais" },
        ]
      },
    ]
  });
};
