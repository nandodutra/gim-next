const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfd_laudo_obs', {
    tfd_laudo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tfd_obs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tfd_laudo_obs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tfd_laudo_id" },
          { name: "tfd_obs_id" },
        ]
      },
      {
        name: "tfd_laudo_has_tfd_laudo_obs_FKIndex1",
        using: "BTREE",
        fields: [
          { name: "tfd_laudo_id" },
        ]
      },
      {
        name: "tfd_laudo_has_tfd_laudo_obs_FKIndex2",
        using: "BTREE",
        fields: [
          { name: "tfd_obs_id" },
        ]
      },
    ]
  });
};
