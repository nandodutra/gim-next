const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scaddomicilio', {
    coddomicilio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codlogradouro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    complemento: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "0000-00-00"
    },
    fone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tipresidencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'scaddomicilio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coddomicilio" },
        ]
      },
    ]
  });
};
