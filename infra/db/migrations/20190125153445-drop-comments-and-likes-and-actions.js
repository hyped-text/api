module.exports = {
  up: queryInterface => Promise.all(['comments', 'likes', 'actions'].map(table => queryInterface.dropTable(table))),
};
