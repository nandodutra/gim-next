const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controle', {
    adm: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    idinstituicao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idusers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idcontrole: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'controle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcontrole" },
        ]
      },
    ]
  });
};
