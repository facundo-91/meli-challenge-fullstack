import { useRouter } from "next/router";
import ProductMain from "../../components/ProductMain";

const Product = () => {
	const router = useRouter();
	const { productID } = router.query;

	if (!productID) return null;

	return <ProductMain productId={productID} />;
};

export default Product;
