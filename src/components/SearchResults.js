import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
	query GetProducts($query: String!) {
		products(query: $query) {
			id
			title
			image
			price
		}
	}
`;

const SearchResults = ({ searchInput }) => {
	const { loading, error, data } = useQuery(GET_PRODUCTS, {
		variables: { query: searchInput },
	});

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error:{error}</div>;

	const { products } = data;

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/product/${product.id}`}>
						<a>
							{product.id} - {product.title}
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SearchResults;
