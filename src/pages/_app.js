import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";
import "../styles/global.css";

const NavBar = dynamic(() => import("../components/NavBar"), { ssr: false });

const App = ({ Component, pageProps }) => {
	return (
		<ApolloProvider client={client}>
			<NavBar />
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default App;
