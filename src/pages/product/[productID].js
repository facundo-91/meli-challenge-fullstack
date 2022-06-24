import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const GET_PRODUCT = gql`
	query GetProductByID($id: ID!) {
		product(id: $id) {
			id
			title
			price
		}
	}
`;
const Product = () => {
	const router = useRouter();
	const { productID } = router.query;
	const { data, loading, error } = useQuery(GET_PRODUCT, {
		variables: { id: productID },
	});

	if (loading) return <div>Loading</div>;
	if (error) return <div>Error: {error.message}</div>;

	const { product } = data;

	return (
		<div>
			<h1>Product Info</h1>
			<h2>{product.title}</h2>
			<p>$:{product.price}</p>
		</div>
	);
};

export default Product;
