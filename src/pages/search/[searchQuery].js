import { useRouter } from "next/router";
import SearchMain from "../../components/SearchMain";

const Search = () => {
	const router = useRouter();
	const { searchQuery } = router.query;

	return <SearchMain searchQuery={searchQuery} />;
};

export default Search;
