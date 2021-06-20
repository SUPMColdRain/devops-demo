const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    s_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "s_id"
    },
    s_username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s_username",
      unique: "s_user_s_username_uindex"
    },
    s_password: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s_password"
    },
    s_admin: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "s_admin"
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createDate"
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updateDate"
    }
  };
  const options = {
    tableName: "s_user",
    comment: "",
    timestamps: false,
    indexes: []
  };
  const SUserModel = sequelize.define("s_user_model", attributes, options);
  return SUserModel;
};