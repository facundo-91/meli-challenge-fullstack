import SearchResultCard from "./SearchResultCard";

const SearchResults = ({ products }) => {
	const { results } = products;

	return (
		<section className="flex w-full flex-col lg:w-[885px]">
			<div className="mb-6 mt-2 hidden text-right text-[#333] lg:block">
				<div className="inline-flex items-center">
					<div className="mr-1.5 text-sm font-semibold leading-[1.7]">Ordenar por</div>
					<div className="flex text-sm">
						<span className="mt-0.5 w-full leading-tight">Más relevantes</span>
						<svg
							className="mt-[3px] mr-0 mb-0 ml-1 h-[18px] w-[18px] fill-meli-blue"
							height="12"
							viewBox="0 0 12 12"
							width="12">
							<path d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z" />
						</svg>
					</div>
				</div>
			</div>
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
