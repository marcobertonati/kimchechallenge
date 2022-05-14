const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Country {
    code: ID!
    name: String!
    native: String!
    phone: String!
    continent: Continent!
    capital: String
    currency: String
    languages: [Language!]!
    emoji: String!
    emojiU: String!
    states: [State!]!
  }
  
  type Query {

    country(code: ID!): Country

  }`);
