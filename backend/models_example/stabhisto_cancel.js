const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stabhisto_cancel', {
    idcancel: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    identificacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    data_cancel: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    id_usuario: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    motivo: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stabhisto_cancel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcancel" },
        ]
      },
    ]
  });
};
