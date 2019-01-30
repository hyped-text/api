const { DataSource } = require('apollo-datasource');

class AuthorAPI extends DataSource {
  constructor({ Author, Article, Action }) {
    super();

    this.Author = Author;

    this.Article = Article;

    this.Action = Action;
  }

  initialize(config) {
    this.context = config.context;
  }

  async saveArticle({ id, ...article }) {
    const exists = await this.Article.findOne({
      where: { id },
    });

    if (id && exists) {
      return this.Article.update(article, {
        where: {
          id,
        },
      });
    }
    const record = await this.Article.build(article);

    return record.save();
  }

  async getAuthorArticles(id) {
    return this.Article.findAll({
      where: {
        author: id,
      },
    });
  }

  async getAuthorById(id) {
    return this.Author.findByPk(id);
  }

  async getAllAuthors() {
    return this.Author.findAll();
  }

  async commentArticle({ id, comment, author }) {
    return this.Action.create({
      author,
      target: id,
      content: comment,
      type: 'comment',
    }).then(action => ({ text: action.content, author: action.author, id: action.id }));
  }
}

module.exports = AuthorAPI;
