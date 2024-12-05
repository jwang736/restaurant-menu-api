# **Restaurant Menu API**

A GraphQL-based API built with Node.js and Apollo Server that provides data for a restaurant menu application. This project includes categories and items from appetizers to main courses and offers mock data for testing purposes.

---

## **Features**
- GraphQL API with type definitions and resolvers for querying restaurant menu data.
- Mock data simulating real menu information.
- Automated testing using Jest to ensure API functionality.
- Easy-to-follow instructions for local setup.

---

## **Technologies Used**
- **Node.js**: JavaScript runtime for server-side development.
- **Apollo Server**: GraphQL server to handle API requests.
- **GraphQL**: Query language for the API.
- **Jest**: Testing framework for automated test cases.

---

## **Getting Started**

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A package manager like `npm` or `yarn`.

---

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/restaurant-menu-api.git
   cd restaurant-menu-api

2. Install dependencies:
    ```bash
    npm install

### Running the Application
1. Start the server:
    ```bash
    npm start

2. Open your browser or GraphQL client (e.g., Apollo Sandbox or Insomnia) and navigate to:
    http://localhost:4000/

3. Use the following query examples to interact with the API:
    **Fetch all categories**
    ```bash
    query {
        categories{
            category
        }
    }
    ```

    **Fetch items by category**
    ```bash
    query {
        menuItemsByCategory(category: "Appetizers") {
            name
            price
            description
        }
    }
    ```

### Running Tests
Run the automated tests using Jest:
    npm test

### Project Structure
    restraunt-menu-api/
    ├── src/
    │   ├── schema.js            # GraphQL type definitions
    │   ├── resolvers.js         # GraphQL resolvers
    │   ├── index.js             # Entry point for the server
    │   ├── data.js              # mockup data
    │
    ├── tests/
    │   ├── api.test.js          # Test cases for API
    │
    ├── .gitignore               # Ignored files and folders
    ├── jest.config.js           # Jest configuration
    ├── package.json             # Project metadata and dependencies
    ├── package-lock.json        # Lockfile for dependencies
    ├── README.md                # Project documentation

### Testing Queries
Example queries and their expected responses:

### Fetch Categories

    **Query:**
    query {
        categories {
            category
        }
    }

    **Expected Response**
    {
        "data": {
            "categories": [
                { "category": "Appetizers" },
                { "category": "Entrees" }
            ]
        }
    }

### Fetch Menu Items by Category

    **Query**
    query {
        menuItemsByCategory(category: "Appetizers") {
            name
            price
            description
        }
    }

    **Expected Response**
    {
        "data": {
            "menuItemsByCategory": [
                {
                    "name": "Iceberg Wedge Salad with House Cured Bacon",
                    "price": 7.5,
                    "description": "tomato salsa gorgonzola"
                },
                {
                    "name": "Sautéed Shredded Brussels Sprouts",
                    "price": 6.95,
                    "description": "bacon hazelnuts gorgonzola"
                }
            ]
        }
    }
