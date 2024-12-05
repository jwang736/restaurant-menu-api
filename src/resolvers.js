const data = require("./data");

module.exports = {
  Query: {
    categories: () => data.menu,
    menuItemsByCategory: (_, { category }) =>
      data.menu.find((c) => c.category === category)?.items || [],
    menuItem: (_, { name }) =>
      data.menu.flatMap((c) => c.items).find((item) => item.name === name),
  },
};
