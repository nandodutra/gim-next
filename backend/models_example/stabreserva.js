const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabreserva', {
    id_reserva: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codprocedimento: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    id_beneficiado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    coddia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    codhorario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    profexec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    oferta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    utilizado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dt_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    dt_cadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    dt_exclusao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    id_cadastro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    id_exclusao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "A"
    },
    id_oferta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'stabreserva',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reserva" },
        ]
      },
    ]
  });
};
