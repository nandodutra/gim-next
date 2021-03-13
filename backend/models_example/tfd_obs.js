const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_obs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stabusuario_id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sdata: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_obs: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tfd_obs',
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
      {
        name: "tfd_laudo_obs_FKIndex1",
        using: "BTREE",
        fields: [
          { name: "stabusuario_id_usuario" },
        ]
      },
    ]
  });
};
