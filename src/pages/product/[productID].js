import { useRouter } from "next/router";
import { initializeApollo, addApolloState } from "../../apollo/client";
import { GET_PRODUCT } from "../../components/ProductMain";
import ProductMain from "../../components/ProductMain";

const Product = () => {
	const router = useRouter();
	const { productID } = router.query;

	if (!productID) return null;

	return <ProductMain productID={productID} />;
};

export const getServerSideProps = async (context) => {
	const apolloClient = initializeApollo();
	const productID = context.query.productID;
	const getProductQueryVars = { id: productID };

	await apolloClient.query({
		query: GET_PRODUCT,
		variables: getProductQueryVars,
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

export default Product;
