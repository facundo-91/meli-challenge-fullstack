const SearchSidebar = ({ filterBy, searchQuery, products }) => {
	const { available_filters, path_from_root, filters, total_products } = products;
	const freeShippingCheckbox = filters.some((filter) => filter.id === "shipping_cost");
	const fullShippingCheckbox = filters.some((filter) => filter.id === "shipping");
	const appliedFilters = filters.filter(
		(filter) =>
			filter.id !== "category" &&
			filter.id !== "shipping_cost" &&
			filter.id !== "shipping" &&
			filter.id !== "BRAND" &&
			filter.values[0].id !== "TUxBQ0NBUGZlZG1sYQ",
	);
	const filtersList = available_filters.filter(
		(filter) =>
			filter.id !== "accepts_mercadopago" &&
			filter.id !== "power_seller" &&
			filter.id !== "since" &&
			filter.id !== "until" &&
			filter.id !== "has_video" &&
			filter.id !== "has_pictures" &&
			filter.id !== "all_payment_methods_discount" &&
			filter.id !== "price_campaign_id",
	);

	const handleFilter = (filterName, filterValue) => {
		const filter = `&${filterName}=${filterValue}`;
		const isCategory = filterName === "category";
		const regex = /(&category=[a-z0-9]+)/i;
		const activeFilters = filters
			.map((filter) => `&${filter.id}=${filter.values[filter.values.length - 1].id}`)
			.join("");
		const newFilters =
			activeFilters.search(`&${filterName}=`) !== -1
				? isCategory
					? activeFilters.replace(regex, filter)
					: activeFilters.replace(filter, "")
				: activeFilters.concat(filter);

		filterBy({
			filters: newFilters,
		});
	};

	return (
		<aside className="hidden w-full max-w-[294px] pr-3.5 lg:block">
			<div>
				<ol className="mb-4 text-sm font-normal leading-[1.45] text-[#666] dark:text-dark-text [&>li]:inline [&>li:last-child>svg]:hidden">
					{path_from_root.map((filter) => {
						return (
							<li key={filter.id}>
								{filter.name}
								<svg
									className="mx-1 inline h-3 w-3 -translate-y-px stroke-current stroke-[1.3] text-[#666] dark:text-dark-text"
									viewBox="0 0 9 14">
									<path d="M1 1.343L6.657 7 1 12.657" fill="none" fillRule="evenodd" />
								</svg>
							</li>
						);
					})}
				</ol>
				<h1 className="text-[26px] font-semibold capitalize leading-[30px] text-[#333] dark:text-dark-text">
					{searchQuery}
				</h1>
			</div>
			<div className="mb-4 mt-1 flex items-center">
				<span className="text-sm font-light leading-[1.29] text-[#333] dark:text-dark-text">
					{new Intl.NumberFormat("es-AR").format(total_products)} resultados
				</span>
			</div>
			{appliedFilters.length > 0 && (
				<section className="flex flex-wrap">
					{appliedFilters.map((filter) => (
						<div
							key={filter.id}
							className="mb-2.5 mr-2.5 cursor-pointer"
							onClick={() => handleFilter(filter.id, filter.values[0].id)}>
							<div className="inline-flex h-full max-h-[26px] items-center rounded-sm border border-transparent bg-white text-sm dark:bg-dark-secundary">
								<span className="overflow-hidden overflow-ellipsis whitespace-nowrap px-1.5 text-[13px] text-black text-opacity-[.62] dark:text-dark-text">
									{filter.values[0].name}
								</span>
								<button className="flex h-6 w-6 cursor-pointer items-center justify-center">
									<span className="flex items-center justify-center">
										<svg className="h-4 w-4 fill-current dark:text-dark-text" viewBox="0 0 16 16">
											<path
												d="M8.594.552l.855.842L5.87 5.022 9.45 8.6l-.849.848-3.572-3.572-3.521 3.572-.855-.842L4.18 5.028.552 1.4l.849-.848 3.621 3.62L8.594.553z"
												fillOpacity="0.45"
												transform="translate(3 3)"
											/>
										</svg>
									</span>
								</button>
							</div>
						</div>
					))}
				</section>
			)}
			<section className="mt-9">
				<div className="w-[242px]">
					<div className="my-1 flex items-center justify-between rounded-md border border-[#ddd] bg-white p-4 dark:border-opacity-10 dark:bg-dark-secundary">
						<span className="text-sm font-semibold text-black text-opacity-80 dark:text-dark-text">
							Llegan mañana
						</span>
						<div className="ml-1.5 inline-block h-4 w-8">
							<span className="relative inline-block h-[18px] w-[34px] rounded-[25px] bg-[#d8d8d8] after:absolute after:left-0 after:my-px after:mx-0.5 after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:bg-opacity-25" />
						</div>
					</div>
				</div>
				<div className="w-[242px]">
					<div
						className="my-1 flex cursor-pointer items-center justify-between rounded-md border border-[#ddd] bg-white p-4 dark:border-opacity-10 dark:bg-dark-secundary"
						onClick={() => handleFilter("shipping", "fulfillment")}>
						<div className="flex flex-col">
							<div className="inline-block text-sm font-semibold leading-[15px] text-black text-opacity-80 dark:text-dark-text">
								<svg
									className="mr-1.5 inline h-[15px] w-[45px] fill-[#00a650]"
									height="13"
									viewBox="0 0 41 13"
									width="41">
									<path
										d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"
										fillRule="nonzero"
									/>
								</svg>
								te ahorra envíos
							</div>
							<span className="mt-[5px] inline-block text-xs leading-[15px] text-black text-opacity-80 dark:text-dark-text">
								Con tu carrito de compras
							</span>
						</div>
						<div className="ml-1.5 inline-block h-4 w-8">
							<label className="relative">
								<input
									readOnly
									checked={fullShippingCheckbox}
									className={`absolute h-6 w-10 cursor-pointer appearance-none before:absolute before:h-[18px] before:w-[34px] before:rounded-[25px] before:bg-[#d8d8d8] before:content-[''] after:absolute ${
										fullShippingCheckbox ? "after:right-1.5" : "after:left-0"
									} after:my-px after:mx-0.5 after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:before:bg-opacity-25`}
									type="checkbox"
								/>
							</label>
						</div>
					</div>
				</div>
				<div className="w-[242px]">
					<div
						className="my-1 flex cursor-pointer items-center justify-between rounded-md border border-[#ddd] bg-white p-4 dark:border-opacity-10 dark:bg-dark-secundary"
						onClick={() => handleFilter("shipping_cost", "free")}>
						<span className="text-sm font-semibold text-black text-opacity-80 dark:text-dark-text">
							Envío gratis
						</span>
						<div className="ml-1.5 inline-block h-4 w-8">
							<label className="relative">
								<input
									readOnly
									checked={freeShippingCheckbox}
									className={`absolute h-6 w-10 cursor-pointer appearance-none before:absolute before:h-[18px] before:w-[34px] before:rounded-[25px] before:bg-[#d8d8d8] before:content-[''] after:absolute ${
										freeShippingCheckbox ? "after:right-1.5" : "after:left-0"
									} after:my-px after:mx-0.5 after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:before:bg-opacity-25`}
									type="checkbox"
								/>
							</label>
						</div>
					</div>
				</div>
				<div className="mt-[30px] pr-4">
					{filtersList.map((filter) => (
						<div key={filter.id} className="mb-[30px]">
							<h3 className="mb-2.5 font-semibold leading-tight text-[#333] dark:text-dark-text">
								{filter.name}
							</h3>
							<ul>
								{filter.values.slice(0, 9).map((value) => (
									<li
										key={value.id}
										className="mb-1.5 cursor-pointer"
										onClick={() => handleFilter(filter.id, value.id)}>
										<div className="flex text-sm leading-[1.35]">
											<span className="font-normal text-[#666] dark:text-dark-text">
												{value.name}
											</span>
											<span className="ml-1.5 font-light text-[#999]">
												({new Intl.NumberFormat("es-AR").format(value.results)})
											</span>
										</div>
									</li>
								))}
								{filter.values.length > 9 ? (
									<span className="text-sm font-normal text-meli-blue">Mostrar más</span>
								) : null}
							</ul>
						</div>
					))}
				</div>
			</section>
		</aside>
	);
};

export default SearchSidebar;
