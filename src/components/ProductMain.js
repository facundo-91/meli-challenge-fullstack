import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import ProductHeader from "./ProductHeader";
import ProductBuyInfo from "./ProductBuyInfo";
import ProductSellerInfo from "./ProductSellerInfo";
import ProductDescription from "./ProductDescription";
import ProductPaymentMethods from "./ProductPaymentMethods";
import ProductQuestions from "./ProductQuestions";
import ProductGallery from "./ProductGallery";
import LoadingSpinner from "./LoadingSpinner";

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
			description
		}
	}
`;

const ProductMain = ({ productId }) => {
	const { data, loading, error } = useQuery(GET_PRODUCT, {
		variables: { id: productId },
	});

	if (loading) return <LoadingSpinner />;
	if (error) return <div>Error: {error.message}</div>;

	const { product } = data;

	return (
		<>
			<Head>
				<title>{product.title} | ML</title>
			</Head>
			<main className="w-full flex-col items-center antialiased lg:flex lg:bg-[#ededed]">
				<div className="mx-auto lg:w-[1184px]">
					<div className="rounded bg-white lg:my-16 lg:min-w-[800px]">
						<div className="lg:hidden">
							<ProductHeader
								condition={product.condition}
								pictures={product.pictures}
								price={product.price}
								soldQuantity={product.sold_quantity}
								title={product.title}
							/>
							<ProductBuyInfo />
							<ProductSellerInfo location={product.location} />
							<ProductDescription description={product.description} />
							<ProductPaymentMethods />
							<ProductQuestions />
						</div>
						<div className="hidden lg:flex lg:pb-10">
							<div className="hidden w-full shrink flex-grow-[3] basis-0 lg:block">
								<div className="flex basis-0 flex-wrap after:m-10 after:block after:h-px after:w-full after:border-b after:border-black after:border-opacity-10 after:content-['']">
									<div className="w-full shrink grow-[2] basis-0">
										<ProductGallery pictures={product.pictures} />
									</div>
									<div className="mr-8 w-full shrink grow-[2] basis-0">
										<ProductHeader
											condition={product.condition}
											pictures={product.pictures}
											price={product.price}
											soldQuantity={product.sold_quantity}
											title={product.title}
										/>
									</div>
								</div>
								<div className="flex flex-wrap after:m-10 after:block after:h-px after:w-full after:border-b after:border-black after:border-opacity-10 after:content-['']">
									<ProductDescription description={product.description} />
								</div>
								<ProductQuestions />
							</div>
							<div className="mt-4 w-full min-w-[325px] max-w-[325px] shrink grow basis-0 pr-4">
								<div className="mb-6 rounded-lg border border-black border-opacity-10">
									<ProductBuyInfo />
								</div>
								<div className="mb-6 rounded-lg border border-black border-opacity-10">
									<ProductSellerInfo location={product.location} />
								</div>
								<div className="rounded-lg border border-black border-opacity-10">
									<ProductPaymentMethods />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default ProductMain;
