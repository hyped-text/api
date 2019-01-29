module.exports = {
  commentArticle: async (_, { id, comment }, { user, dataSources }) =>
    dataSources.authorAPI.commentArticle({ id, comment, author: user.id }),
};
