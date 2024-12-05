module.exports = {
  roots: ["<rootDir>/tests"], // Specifies the folder containing test files
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Matches files like *.spec.js or *.test.js
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Transforms ES6+ code if needed
  },
};
