import SearchResultCard from "./SearchResultCard";
import SearchSortingFilter from "./SearchSortingFilter";

const SearchResults = ({ products, sort }) => {
	const { sort_order, results } = products;

	return (
		<section className="flex w-full flex-col lg:w-[885px]">
			<SearchSortingFilter sort={sort} sortedBy={sort_order} />
			<ol className="lg:[&>li:first-child>div]:rounded-t lg:[&>li:last-child>div]:rounded-b">
				{results.map((product) => (
					<SearchResultCard
						key={product.id}
						freeShipping={product.free_shipping}
						id={product.id}
						image={product.image}
						price={product.price}
						title={product.title}
					/>
				))}
			</ol>
		</section>
	);
};

export default SearchResults;
