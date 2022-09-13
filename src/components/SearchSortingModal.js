const SearchSortingModal = ({ toggle, sort, sortedBy }) => {
	const handleSort = (sortBy) => {
		sortedBy !== sortBy ? sort({ sortOrder: sortBy }) : null;
	};

	return (
		<div className="fixed inset-0 z-20 flex bg-white dark:bg-dark-primary">
			<div className="relative h-full w-full">
				<div className="flex h-full flex-col">
					<div className="flex px-8 pt-[101px] pb-[53px]">
						<div className="flex">
							<span className="text-[2rem] font-semibold leading-none text-black text-opacity-90 dark:text-dark-text">
								Ordenar por
							</span>
						</div>
						<button
							className="absolute top-4 left-[27px] mt-0.5 h-[35px] w-[35px] bg-transparent before:absolute before:top-0 before:left-0 before:h-[35px] before:w-[35px] before:bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzNDgzZmEiIHN0cm9rZT0iIzM0ODNmYSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48cGF0aCBzdHJva2Utd2lkdGg9Ii4yIiBkPSJtNiAxNS42NjcgOSA5TDE2LjMzMyAyMyAxMCAxNi42NjdoMTZ2LTJIMTBsNi4zMzMtNi4zMzNMMTUgNi42Njd6Ii8+PC9zdmc+)] before:text-meli-blue before:content-['']"
							onClick={() => toggle()}
						/>
					</div>
					<div className="w-full grow">
						<ul className="border-b border-black border-opacity-10 text-lg font-light leading-none antialiased dark:border-[#ddd] dark:border-opacity-10">
							<li onClick={() => handleSort("relevance")}>
								<div
									className={`relative border-t border-black border-opacity-10 py-5 pl-8 pr-4 text-black text-opacity-90 dark:border-[#ddd] dark:border-opacity-10 dark:text-dark-text ${
										sortedBy === "relevance"
											? "rounded-[1.5px] before:absolute before:left-0.5 before:top-0.5 before:bottom-0.5 before:border-l-[6px] before:border-l-meli-blue before:content-['']"
											: "cursor-pointer"
									}`}>
									Más relevantes
								</div>
							</li>
							<li onClick={() => handleSort("price_asc")}>
								<div
									className={`relative border-t border-black border-opacity-10 py-5 pl-8 pr-4 text-black text-opacity-90 dark:border-[#ddd] dark:border-opacity-10 dark:text-dark-text ${
										sortedBy === "price_asc"
											? "rounded-[1.5px] before:absolute before:left-0.5 before:top-0.5 before:bottom-0.5 before:border-l-[6px] before:border-l-meli-blue before:content-['']"
											: "cursor-pointer"
									}`}>
									Menor precio
								</div>
							</li>
							<li onClick={() => handleSort("price_desc")}>
								<div
									className={`relative border-t border-black border-opacity-10 py-5 pl-8 pr-4 text-black text-opacity-90 dark:border-[#ddd] dark:border-opacity-10 dark:text-dark-text ${
										sortedBy === "price_desc"
											? "rounded-[1.5px] before:absolute before:left-0.5 before:top-0.5 before:bottom-0.5 before:border-l-[6px] before:border-l-meli-blue before:content-['']"
											: "cursor-pointer"
									}`}>
									Mayor precio
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchSortingModal;
