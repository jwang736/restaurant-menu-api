const { ApolloServer } = require("apollo-server");
const { gql } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");

// Mock Data
const mockData = {
  categories: [
    {
      category: "Appetizers",
      items: [
        {
          name: "Iceberg Wedge Salad with House Cured Bacon",
          price: 7.5,
          description: "tomato salsa gorgonzola",
        },
        {
          name: "Sautéed Shredded Brussels Sprouts",
          price: 6.95,
          description: "bacon hazelnuts gorgonzola",
        },
      ],
    },
    {
      category: "Entrees",
      items: [
        {
          name: "Farfalle Pasta with Braised Pork in Tomato Cream",
          price: 12.95,
          description: "capers butternut squash kale",
        },
      ],
    },
  ],
};

// Mock Schema
const typeDefs = gql`
  type Item {
    name: String!
    price: Float!
    description: String
  }

  type Category {
    category: String!
    items: [Item!]!
  }

  type Query {
    categories: [Category!]!
    menuItemsByCategory(category: String!): [Item!]!
  }
`;

// Mock Resolvers
const resolvers = {
  Query: {
    categories: () => mockData.categories,
    menuItemsByCategory: (_, { category }) =>
      mockData.categories.find((cat) => cat.category === category)?.items || [],
  },
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create Test Client
const { query } = createTestClient(server);

// Test Cases
describe("Restaurant Menu API", () => {
  test("Fetch categories", async () => {
    const res = await query({ query: `{ categories { category } }` });
    expect(res.data.categories).toBeDefined();
    expect(res.data.categories).toHaveLength(2); // Ensure we have 2 categories
    expect(res.data.categories[0].category).toBe("Appetizers");
    expect(res.data.categories[1].category).toBe("Entrees");
  });

  test("Fetch items by category", async () => {
    const res = await query({
      query: `{ menuItemsByCategory(category: "Appetizers") { name } }`,
    });
    expect(res.data.menuItemsByCategory).toBeDefined();
    expect(res.data.menuItemsByCategory).toHaveLength(2); // Ensure there are 2 items
    expect(res.data.menuItemsByCategory[0].name).toBe(
      "Iceberg Wedge Salad with House Cured Bacon"
    );
    expect(res.data.menuItemsByCategory[1].name).toBe(
      "Sautéed Shredded Brussels Sprouts"
    );
  });
});
