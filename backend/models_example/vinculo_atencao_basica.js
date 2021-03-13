const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vinculo_atencao_basica', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estabelecimento_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profissional_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cbo: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    criado_em: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    situacao: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vinculo_atencao_basica',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
