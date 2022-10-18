import { useState, Fragment } from "react";

const SearchFilteringModal = ({ availableFilters, filterBy, filters, toggle }) => {
	const [expandedFiltersList, setExpandedFiltersList] = useState([]);

	const freeShippingCheckbox = filters.some((filter) => filter.id === "shipping_cost");
	const fullShippingCheckbox = filters.some((filter) => filter.id === "shipping");
	const filtersList = availableFilters.filter(
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

	const handleExpandableList = (filterId) => {
		const newExpandedFiltersList = [...expandedFiltersList];
		const filterIndex = newExpandedFiltersList.indexOf(filterId);

		filterIndex > -1
			? newExpandedFiltersList.splice(filterIndex, 1)
			: newExpandedFiltersList.push(filterId);

		setExpandedFiltersList(newExpandedFiltersList);
	};

	return (
		<div className="fixed inset-0 z-20 flex overflow-y-scroll bg-white dark:bg-dark-primary">
			<div className="relative h-full w-full">
				<div className="flex h-full flex-col">
					<div className="flex px-8 pt-[101px] pb-[53px]">
						<div className="flex">
							<span className="text-[2rem] font-semibold leading-none text-black text-opacity-90 dark:text-dark-text">
								Filtrar por
							</span>
						</div>
						<button
							className="absolute top-4 left-[27px] mt-0.5 h-[35px] w-[35px] bg-transparent before:absolute before:top-0 before:left-0 before:h-[35px] before:w-[35px] before:bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzNDgzZmEiIHN0cm9rZT0iIzM0ODNmYSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48cGF0aCBzdHJva2Utd2lkdGg9Ii4yIiBkPSJtNiAxNS42NjcgOSA5TDE2LjMzMyAyMyAxMCAxNi42NjdoMTZ2LTJIMTBsNi4zMzMtNi4zMzNMMTUgNi42Njd6Ii8+PC9zdmc+)] before:text-meli-blue before:content-['']"
							onClick={() => toggle()}
						/>
					</div>
					<div className="w-full grow">
						<ul className="border-b border-black border-opacity-10 text-lg font-light leading-none antialiased dark:border-[#ddd] dark:border-opacity-10">
							<li className="flex h-12 justify-between border-t border-black border-opacity-10 py-8 pl-8 pr-4 text-black text-opacity-90 dark:border-[#ddd] dark:border-opacity-10 dark:text-dark-text">
								<div className="flex items-center">
									<span className="block text-base">
										<label className="inline-block">Llegan mañana</label>
									</span>
								</div>
								<div className="inline-flex">
									<div className="relative right-3 inline-block h-4 w-8 self-center">
										<input
											readOnly
											className="absolute h-4 w-8 appearance-none before:absolute before:h-[16px] before:w-[32px] before:rounded-[25px] before:bg-[#d8d8d8] before:content-[''] after:absolute after:left-0 after:my-0.5 after:mx-0.5 after:block after:h-3 after:w-3 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:before:bg-opacity-25"
											type="checkbox"
										/>
									</div>
								</div>
							</li>
							<li
								className="flex h-12 cursor-pointer justify-between border-t border-black border-opacity-10 py-8 pl-8 pr-4 text-black text-opacity-90 dark:border-[#ddd] dark:border-opacity-10 dark:text-dark-text"
								onClick={() => handleFilter("shipping", "fulfillment")}>
								<div className="flex items-center">
									<span className="block text-base">
										<label className="inline-block cursor-pointer leading-none">
											<svg
												className="relative top-[5px] right-px inline h-[18px] w-[55px] fill-[#00a650] align-baseline"
												viewBox="0 0 41 13">
												<path
													d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"
													fillRule="nonzero"
												/>
											</svg>{" "}
											te ahorra envíos
										</label>
										<label className="mt-1.5 block cursor-pointer text-sm leading-[14px]">
											Con tu carrito de compras
										</label>
									</span>
								</div>
								<div className="inline-flex">
									<div className="relative right-3 inline-block h-4 w-8 self-center">
										<input
											readOnly
											checked={fullShippingCheckbox}
											className={`absolute h-4 w-8 cursor-pointer appearance-none before:absolute before:h-[16px] before:w-[32px] before:rounded-[25px] before:bg-[#d8d8d8] before:content-[''] after:absolute ${
												fullShippingCheckbox ? "after:right-0" : "after:left-0"
											} after:my-0.5 after:mx-0.5 after:block after:h-3 after:w-3 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:before:bg-opacity-25`}
											type="checkbox"
										/>
									</div>
								</div>
							</li>
							<li
								className="flex h-12 cursor-pointer justify-between border-t border-black border-opacity-10 py-8 pl-8 pr-4 text-black text-opacity-90 dark:border-[#ddd] dark:border-opacity-10 dark:text-dark-text"
								onClick={() => handleFilter("shipping_cost", "free")}>
								<div className="flex items-center">
									<span className="block text-base">
										<label className="inline-block cursor-pointer">Envío gratis</label>
									</span>
								</div>
								<div className="inline-flex">
									<div className="relative right-3 inline-block h-4 w-8 self-center">
										<input
											readOnly
											checked={freeShippingCheckbox}
											className={`absolute h-4 w-8 cursor-pointer appearance-none before:absolute before:h-[16px] before:w-[32px] before:rounded-[25px] before:bg-[#d8d8d8] before:content-[''] after:absolute ${
												freeShippingCheckbox ? "after:right-0" : "after:left-0"
											} after:my-0.5 after:mx-0.5 after:block after:h-3 after:w-3 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:before:bg-opacity-25`}
											type="checkbox"
										/>
									</div>
								</div>
							</li>
							{filtersList.map((filter) => (
								<Fragment key={filter.id}>
									<li
										className="flex h-12 cursor-pointer justify-between border-t border-black border-opacity-10 py-8 pl-8 pr-4 text-black text-opacity-90 dark:border-[#ddd] dark:border-opacity-10 dark:text-dark-text"
										onClick={() => handleExpandableList(filter.id)}>
										<div className="flex items-center text-base">
											<span>{filter.name}</span>
										</div>
										<div className="inline-flex">
											<span
												className={`relative right-2 ${
													expandedFiltersList.some((filterId) => filterId === filter.id)
														? "-rotate-90"
														: "rotate-90"
												} self-center pr-[23px] pl-[25px]`}>
												<svg className="h-3.5 w-[9px] stroke-meli-blue" viewBox="0 0 9 14">
													<path d="M1 1.343L6.657 7 1 12.657" fill="none" fillRule="evenodd" />
												</svg>
											</span>
										</div>
									</li>
									<ul
										className={`${
											expandedFiltersList.some((filterId) => filterId === filter.id)
												? "block"
												: "hidden"
										} border-t border-black border-opacity-10 bg-[#fafafa] py-4 text-meli-blue dark:bg-dark-secundary`}>
										{filter.values.map((value) => (
											<li
												key={value.id}
												className="cursor-pointer"
												onClick={() => handleFilter(filter.id, value.id)}>
												<span className="block py-5 pl-8">{value.name}</span>
											</li>
										))}
									</ul>
								</Fragment>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchFilteringModal;
