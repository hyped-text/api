module.exports = (sequelize, DataTypes) =>
  sequelize.define('topic', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    author: DataTypes.UUID,
    likes: DataTypes.UUID,
  });
