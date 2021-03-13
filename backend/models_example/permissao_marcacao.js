const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permissao_marcacao', {
    codestabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estabelecimento_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data_inicial: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_final: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    codusuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'permissao_marcacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codestabelecimento" },
        ]
      },
    ]
  });
};
