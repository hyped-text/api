const auth = require('app/modules/auth');
const author = require('app/modules/author');
const article = require('app/modules/article');
const Likeable = require('app/modules/likeable');
const { mergeResolvers } = require('./util');

module.exports = {
  Query: mergeResolvers(author.Query),
  Mutation: mergeResolvers(auth.Mutation, author.Mutation, article.Mutation),
  Likeable,
  Author: author.Author,
  Article: author.Article,
};
