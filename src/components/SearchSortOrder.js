import { useState } from "react";

const SearchSortOrder = ({ sort, sortedBy }) => {
	const [openList, setOpenList] = useState(false);

	const sortList = {
		price_asc: "Menor precio",
		price_desc: "Mayor precio",
		relevance: "Mas relevantes",
	};

	const handleSort = (sortBy) => {
		sortedBy !== sortBy ? sort({ sortOrder: sortBy }) : null;
	};

	return (
		<div className="mb-6 mt-2 hidden text-right text-[#333] lg:block">
			<div className="inline-flex items-center">
				<div className="mr-1.5 text-sm font-semibold leading-[1.7]">Ordenar por</div>
				<div className="relative flex text-sm">
					<button className="flex" onClick={() => setOpenList((toggle) => !toggle)}>
						<span className="mt-0.5 w-full leading-tight">
							{sortedBy in sortList ? sortList[sortedBy] : ""}
						</span>
						<svg
							className={`mt-[3px] mr-0 mb-0 ml-1 h-[18px] w-[18px] fill-meli-blue transition-transform ${
								openList ? "rotate-180" : ""
							}`}
							height="12"
							viewBox="0 0 12 12"
							width="12">
							<path d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z" />
						</svg>
					</button>
					<div
						className={`absolute -translate-x-[9px] translate-y-[27px] ${
							openList ? "block" : "hidden"
						}`}>
						<div className="w-auto min-w-[124px] rounded-md bg-white">
							<div className="min-w-[135px] overflow-hidden">
								<ul className="overflow-y-auto rounded-md text-sm font-light leading-none shadow-[0_1px_2px_0_rgb(0,0,0,12%)]">
									<li
										className={`relative rounded-t-md border-b border-b-[#d8d8d8] py-[13px] pl-4 after:absolute after:top-0 after:left-0 after:h-full after:content-[''] hover:after:w-[5px] ${
											sortedBy === "relevance"
												? "bg-black bg-opacity-[.04] font-semibold before:absolute before:top-0 before:bottom-0.5 before:left-0 before:h-full before:rounded-[1.5px] before:border-l-[5px] before:border-meli-blue before:content-[''] after:bg-meli-blue"
												: "cursor-pointer after:bg-[#9cc4db] hover:bg-black hover:bg-opacity-[.04]"
										}`}
										onClick={() => handleSort("relevance")}>
										<div className="flex items-center ">
											<div
												className={`${
													sortedBy === "relevance" ? "text-meli-blue" : "text-[#333]"
												}`}>
												<span className="block">Más relevantes</span>
											</div>
										</div>
									</li>
									<li
										className={`relative border-b border-b-[#d8d8d8] py-[13px] pl-4 after:absolute after:top-0 after:left-0 after:h-full after:content-[''] hover:after:w-[5px] ${
											sortedBy === "price_asc"
												? "bg-black bg-opacity-[.04] font-semibold before:absolute before:top-0 before:bottom-0.5 before:left-0 before:h-full before:rounded-[1.5px] before:border-l-[5px] before:border-meli-blue before:content-[''] after:bg-meli-blue"
												: "cursor-pointer after:bg-[#9cc4db] hover:bg-black hover:bg-opacity-[.04]"
										}`}
										onClick={() => handleSort("price_asc")}>
										<div className="flex items-center ">
											<div
												className={`${
													sortedBy === "price_asc" ? "text-meli-blue" : "text-[#333]"
												}`}>
												<span className="block">Menor precio</span>
											</div>
										</div>
									</li>
									<li
										className={`relative rounded-b-md border-b border-b-[#d8d8d8] py-[13px] pl-4 after:absolute after:top-0 after:left-0 after:h-full after:content-[''] hover:after:w-[5px] ${
											sortedBy === "price_desc"
												? "bg-black bg-opacity-[.04] font-semibold before:absolute before:top-0 before:bottom-0.5 before:left-0 before:h-full before:rounded-[1.5px] before:border-l-[5px] before:border-meli-blue before:content-[''] after:bg-meli-blue"
												: "cursor-pointer after:bg-[#9cc4db] hover:bg-black hover:bg-opacity-[.04]"
										}`}
										onClick={() => handleSort("price_desc")}>
										<div className="flex items-center ">
											<div
												className={`${
													sortedBy === "price_desc" ? "text-meli-blue" : "text-[#333]"
												}`}>
												<span className="block">Mayor precio</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchSortOrder;
