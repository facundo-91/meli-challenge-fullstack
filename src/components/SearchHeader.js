const SearchHeader = ({ searchQuery }) => {
	return (
		<div className="p-4 lg:hidden">
			<h1 className="m-0 text-base font-semibold capitalize leading-tight text-[#333] dark:text-dark-text">
				{searchQuery}
			</h1>
		</div>
	);
};

export default SearchHeader;
