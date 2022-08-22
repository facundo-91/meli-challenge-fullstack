import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type SearchResult {
		results: [Result]
		total_products: String
		sort_order: String
	}

	type Result {
		id: ID
		title: String
		price: Float
		image: String
		free_shipping: Boolean
	}

	type Item {
		id: ID!
		title: String
		price: Float
		sold_quantity: Int
		condition: String
		pictures: [String]
		location: String
		product_id: String
		description: String
	}

	type Query {
		product(id: ID!): Item
		products(query: String!, sortOrder: String!): SearchResult
	}
`;
