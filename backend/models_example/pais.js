const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pais', {
    cod_pais: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    sgl_pais: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    nom_pais: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pais',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_pais" },
        ]
      },
    ]
  });
};
