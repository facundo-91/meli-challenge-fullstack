import { useQuery, gql } from "@apollo/client";
import SearchToolbar from "./SearchToolbar";
import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";
import SearchSidebar from "./SearchSidebar";
import LoadingSpinner from "./LoadingSpinner";

const GET_PRODUCTS = gql`
	query GetProducts($query: String!, $sortOrder: String!) {
		products(query: $query, sortOrder: $sortOrder) {
			results {
				id
				title
				price
				image
				free_shipping
			}
			total_products
			sort_order
		}
	}
`;

const SearchMain = ({ searchQuery }) => {
	const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
		variables: { query: searchQuery, sortOrder: "relevance" },
		notifyOnNetworkStatusChange: true,
	});

	if (loading) return <LoadingSpinner />;
	if (error) return <div>Error:{error.message}</div>;

	const { products } = data;

	return (
		<main className="w-full flex-col items-center bg-[#f5f5f5] antialiased lg:flex lg:bg-[#ededed]">
			<SearchToolbar sort={refetch} sortedBy={products.sort_order} />
			<SearchHeader searchQuery={searchQuery} />
			<div className="flex w-full max-w-[1215px] pb-8 lg:mt-4 lg:pl-2.5 lg:pr-7">
				<SearchSidebar searchQuery={searchQuery} totalResults={products.total_products} />
				<SearchResults products={products} sort={refetch} />
			</div>
		</main>
	);
};

export default SearchMain;
