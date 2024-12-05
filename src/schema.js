const { gql } = require("apollo-server");

module.exports = gql`
  type MenuItem {
    name: String
    price: Float
    description: String
  }

  type Category {
    category: String
    items: [MenuItem]
  }

  type Query {
    categories: [Category]
    menuItemsByCategory(category: String!): [MenuItem]
    menuItem(name: String!): MenuItem
  }
`;
