import { gql } from "apollo-boost";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      continent {
        name
      }
      languages {
        name
      }
      emoji
      emojiU
    }
  }
`;
