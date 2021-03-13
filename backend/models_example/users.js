const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    login: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    sexo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    idinstituicao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idusers: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idusers" },
        ]
      },
    ]
  });
};
