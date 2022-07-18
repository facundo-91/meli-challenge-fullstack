import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type Product {
		id: ID!
		title: String
		image: String
		price: Float
		location: String
		free_shipping: Boolean
		product_id: String
		sold_quantity: Int
		condition: String
		pictures: [String]
		short_description: String
	}
	type Query {
		product(id: ID!): Product
		products(query: String!): [Product]
	}
`;
