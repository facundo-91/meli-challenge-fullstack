import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
	const [searchInput, setSearchInput] = useState("");
	const router = useRouter();

	return (
		<nav className="flex my-1 mx-1">
			<Link href="/">
				<a>Home</a>
			</Link>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					router.push(`/search/${searchInput}`);
				}}>
				<input
					className="ml-10 border border-black"
					type="search"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button className="bg-yellow-300 border-yellow-300 border ml-4" type="submit">
					Search
				</button>
			</form>
		</nav>
	);
};

export default NavBar;
