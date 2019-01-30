module.exports = (sequelize, DataTypes) =>
  sequelize.define('like', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    content: DataTypes.TEXT,
    author: DataTypes.UUID,
  });
