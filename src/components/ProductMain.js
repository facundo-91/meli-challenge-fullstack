import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import ProductHeader from "./ProductHeader";
import ProductBuyInfo from "./ProductBuyInfo";
import ProductSellerInfo from "./ProductSellerInfo";
import ProductDescription from "./ProductDescription";
import ProductPaymentMethods from "./ProductPaymentMethods";
import ProductQuestions from "./ProductQuestions";

const GET_PRODUCT = gql`
	query GetProductByID($id: ID!) {
		product(id: $id) {
			id
			title
			price
			sold_quantity
			condition
			pictures
			location
			short_description
		}
	}
`;

const ProductMain = ({ productId }) => {
	const { data, loading, error } = useQuery(GET_PRODUCT, {
		variables: { id: productId },
	});

	if (loading) return <div>Loading</div>;
	if (error) return <div>Error: {error.message}</div>;

	const { product } = data;

	return (
		<>
			<Head>
				<title>{product.title} | ML</title>
			</Head>
			<main className="w-full flex-col items-center bg-[#f5f5f5] antialiased lg:flex lg:bg-[#ededed]">
				<div className="bg-white">
					<div className="">
						<ProductHeader
							condition={product.condition}
							pictures={product.pictures}
							price={product.price}
							soldQuantity={product.sold_quantity}
							title={product.title}
						/>
						<ProductBuyInfo />
						<ProductSellerInfo location={product.location} />
						<ProductDescription description={product.short_description} />
						<ProductPaymentMethods />
						<ProductQuestions />
					</div>
				</div>
			</main>
		</>
	);
};

export default ProductMain;
