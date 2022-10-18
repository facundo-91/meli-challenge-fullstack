const SearchHeader = ({ filterBy, filters, searchQuery }) => {
	const appliedFilters = filters.filter(
		(filter) =>
			filter.id !== "category" &&
			filter.id !== "shipping" &&
			filter.id !== "BRAND" &&
			filter.values[0].id !== "TUxBQ0NBUGZlZG1sYQ",
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
		<div className="lg:hidden">
			<div className="p-4">
				<h1 className="m-0 text-base font-semibold capitalize leading-tight text-[#333] dark:text-dark-text">
					{searchQuery}
				</h1>
			</div>
			{appliedFilters.length > 0 && (
				<div className="mb-3 px-4">
					{appliedFilters.map((filter) => (
						<div
							key={filter.id}
							className="mr-2 mb-2 inline-block cursor-pointer"
							onClick={() => handleFilter(filter.id, filter.values[0].id)}>
							<div className="inline-flex h-8 items-center rounded-3xl border border-transparent bg-black bg-opacity-5 px-1.5 text-sm dark:bg-dark-secundary">
								<span className="overflow-hidden overflow-ellipsis whitespace-nowrap px-1.5 text-[13px] text-black text-opacity-[.62] dark:text-dark-text">
									{filter.values[0].id === "free" ? "Envío gratis" : filter.values[0].name}
								</span>
								<button className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-30">
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
				</div>
			)}
		</div>
	);
};

export default SearchHeader;
