const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stab_log', {
    id_log: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tela: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_registro: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datahora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stab_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_log" },
        ]
      },
    ]
  });
};
