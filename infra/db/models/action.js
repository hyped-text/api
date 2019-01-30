module.exports = (sequelize, DataTypes) => {
  const action = sequelize.define(
    'action',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM('like', 'comment', 'tag'),
      },
      target: DataTypes.UUID,
      content: DataTypes.VIRTUAL,
      author: DataTypes.UUID,
    },
    {
      classMethods: {
        associate(models) {
          action.belongsTo(models.like);
          action.belongsTo(models.comment);
          action.belongsTo(models.tag);
        },
      },
      hooks: {
        afterCreate({ type, content, id, author }) {
          const entity = sequelize.models[type];

          if (entity) {
            entity.create({
              author,
              content,
              id,
            });
          }
        },
      },
    }
  );

  return action;
};
