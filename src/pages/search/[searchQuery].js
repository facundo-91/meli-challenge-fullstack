import { useRouter } from "next/router";
import SearchMain from "../../components/SearchMain";

const Search = () => {
	const router = useRouter();
	const { searchQuery } = router.query;

	if (!searchQuery) return null;

	return <SearchMain searchQuery={searchQuery} />;
};

export default Search;
