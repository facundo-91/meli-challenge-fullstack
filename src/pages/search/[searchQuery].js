import { useRouter } from "next/router";
import { initializeApollo, addApolloState } from "../../apollo/client";
import { GET_PRODUCTS } from "../../components/SearchMain";
import SearchMain from "../../components/SearchMain";

const Search = () => {
	const router = useRouter();
	const { searchQuery } = router.query;

	if (!searchQuery) return null;

	return <SearchMain searchQuery={searchQuery} />;
};

export const getServerSideProps = async (context) => {
	const apolloClient = initializeApollo();
	const searchQuery = context.query.searchQuery;
	const getProductsQueryVars = { query: searchQuery, sortOrder: "relevance" };

	await apolloClient.query({
		query: GET_PRODUCTS,
		variables: getProductsQueryVars,
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

export default Search;
