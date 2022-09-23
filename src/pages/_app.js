import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import { useApollo } from "../apollo/client";
import NavBar from "../components/NavBar";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
	const apolloClient = useApollo(pageProps);

	return (
		<ThemeProvider attribute="class">
			<ApolloProvider client={apolloClient}>
				<NavBar />
				<Component {...pageProps} />
			</ApolloProvider>
		</ThemeProvider>
	);
};

export default App;
