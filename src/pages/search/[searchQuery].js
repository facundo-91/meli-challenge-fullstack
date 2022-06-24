import { useRouter } from "next/router";
import SearchResults from "../../components/SearchResults";

const Search = () => {
	const router = useRouter();
	const { searchQuery } = router.query;

	return (
		<div>
			<SearchResults searchInput={searchQuery} />
		</div>
	);
};

export default Search;
