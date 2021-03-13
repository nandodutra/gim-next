const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programa_procedimento', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    programa_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    procedimento_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    limite: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    carencia: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    excluido: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'programa_procedimento',
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
