const data = require("./data");

module.exports = {
  Query: {
    categories: () => data.menu,
    menuItemsByCategory: (_, { category }) => {
      const categoryData = data.menu.find((c) => c.category === category);
      return categoryData ? categoryData.items : [];
    },
    menuItem: (_, { name }) => {
      const items = data.menu.flatMap((c) => c.items);
      return items.find((item) => item.name === name);
    },
  },
};
