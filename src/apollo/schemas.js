import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type SearchResult {
		results: [Result]
		total_products: String
		sort_order: String
		filters: [AppliedFilter]
		available_filters: [Filter]
		path_from_root: [FilterPath]
	}

	type Result {
		id: ID
		title: String
		price: Float
		image: String
		free_shipping: Boolean
	}

	type AppliedFilter {
		id: String
		name: String
		type: String
		values: [AppliedFilterValue]
	}

	type Filter {
		id: String
		name: String
		type: String
		values: [FilterValue]
	}

	type FilterValue {
		id: String
		name: String
		results: Int
	}

	type AppliedFilterValue {
		id: String
		name: String
	}

	type FilterPath {
		id: String
		name: String
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
		products(query: String!, sortOrder: String!, filters: String): SearchResult
	}
`;
