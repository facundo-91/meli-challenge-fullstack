import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type Product {
		id: ID!
		image: String
		price: Float
		title: String
		location: String
	}
	type Query {
		product(id: ID!): Product
		products(query: String!): [Product]
	}
`;
