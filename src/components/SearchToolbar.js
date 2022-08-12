import { useEffect, useState } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";
import SearchSortingModal from "./SearchSortingModal";

const SearchToolbar = ({ sort, sortedBy }) => {
	const [showSortingModal, setShowSortingModal] = useState(false);

	const toggleSortingModal = () => setShowSortingModal(!showSortingModal);

	useEffect(() => {
		showSortingModal
			? document.body.classList.add("overflow-hidden")
			: document.body.classList.remove("overflow-hidden");
	}, [showSortingModal]);

	return (
		<>
			<div className="border-y border-black border-opacity-[0.07] bg-white lg:hidden">
				<ul className="flex w-full content-center justify-around [&>li]:relative [&>li>div]:flex [&>li>div]:items-center [&>li>div]:justify-center [&>li>div]:text-sm">
					<li
						className="flex-auto cursor-pointer after:absolute after:bottom-4 after:right-0 after:h-5 after:border-r after:border-[#ddd] after:content-['']"
						onClick={() => toggleSortingModal()}>
						<div className="h-[52px] text-meli-blue">
							<div className="mr-2 h-3.5 w-3.5">
								<svg fill="#3483fa" viewBox="0 0 32 32">
									<path d="M6.857 23.527l-3.705-3.705-1.616 1.616 6.464 6.464 6.464-6.462-1.616-1.616-3.705 3.701v-18.953h-2.286v18.955zM22.857 8.473l-3.705 3.705-1.616-1.616 6.464-6.464 0.809 0.807 5.655 5.657-1.616 1.616-3.705-3.703v18.953h-2.286v-18.955z" />
								</svg>
							</div>
							Ordenar
						</div>
					</li>
					<li className="flex min-w-[160px] items-center justify-center px-3.5 after:absolute after:bottom-4 after:right-0 after:h-5 after:border-r after:border-[#ddd] after:content-['']">
						<div className="text-[#333]">
							Llegan mañana
							<div className="ml-1.5 inline-block h-4 w-8">
								<span className="relative inline-block h-4 w-8 rounded-[25px] bg-[#d8d8d8] after:absolute after:left-0 after:m-0.5 after:block after:h-3 after:w-3 after:rounded-full after:bg-white after:content-['']" />
							</div>
						</div>
					</li>
					<li className="flex-auto">
						<div className="h-[52px] text-meli-blue">
							<div className="mr-2 h-3.5 w-3.5">
								<svg fill="#3483fa" viewBox="0 0 32 32">
									<path d="M15.9 22h16.1v2h-16.1c-0.479 2.301-2.491 4.005-4.9 4.005s-4.42-1.704-4.894-3.973l-0.006-0.032h-6.1v-2h6.1c0.479-2.301 2.491-4.005 4.9-4.005s4.421 1.704 4.894 3.973l0.006 0.032zM18.1 8c0.48-2.301 2.491-4.005 4.9-4.005s4.421 1.704 4.894 3.973l0.006 0.032h4.1v2h-4.1c-0.48 2.301-2.491 4.005-4.9 4.005s-4.421-1.704-4.894-3.973l-0.006-0.033h-18.1v-2h18.1zM23 12c1.657 0 3-1.343 3-3s-1.343-3-3-3v0c-1.657 0-3 1.343-3 3s1.343 3 3 3v0zM11 26c1.657 0 3-1.343 3-3s-1.343-3-3-3v0c-1.657 0-3 1.343-3 3s1.343 3 3 3v0z" />
								</svg>
							</div>
							Filtrar
						</div>
					</li>
				</ul>
			</div>
			<ClientOnlyPortal selector="#modal-portal">
				{showSortingModal && (
					<SearchSortingModal sort={sort} sortedBy={sortedBy} toggle={toggleSortingModal} />
				)}
			</ClientOnlyPortal>
		</>
	);
};

export default SearchToolbar;
