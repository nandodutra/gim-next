const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vinculo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_estabelecimento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_profissional: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_procedimento: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    valor_cobrado: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "A"
    }
  }, {
    sequelize,
    tableName: 'vinculo',
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
