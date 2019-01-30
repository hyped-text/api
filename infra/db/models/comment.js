module.exports = (sequelize, DataTypes) =>
  sequelize.define('comment', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    content: DataTypes.TEXT,
    author: DataTypes.UUID,
  });
