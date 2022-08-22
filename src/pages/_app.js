import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import NavBar from "../components/NavBar";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<NavBar />
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default App;
