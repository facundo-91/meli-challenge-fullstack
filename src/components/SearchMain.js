import { useQuery, gql } from "@apollo/client";
import SearchToolbar from "./SearchToolbar";
import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";
import SearchSidebar from "./SearchSidebar";

const GET_PRODUCTS = gql`
	query GetProducts($query: String!) {
		products(query: $query) {
			id
			title
			image
			price
			location
			free_shipping
		}
	}
`;

const SearchMain = ({ searchQuery }) => {
	const { loading, error, data } = useQuery(GET_PRODUCTS, {
		variables: { query: searchQuery },
	});

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error:{error.message}</div>;

	const { products } = data;

	return (
		<main className="w-full flex-col items-center bg-[#f5f5f5] antialiased lg:flex lg:bg-[#ededed]">
			<SearchToolbar />
			<SearchHeader searchQuery={searchQuery} />
			<div className="flex w-full max-w-[1215px] pb-8 lg:mt-4 lg:pl-2.5 lg:pr-7">
				<SearchSidebar searchQuery={searchQuery} />
				<SearchResults products={products} />
			</div>
		</main>
	);
};

export default SearchMain;
