import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";
import NavBar from "../components/NavBar";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
	return (
		<ApolloProvider client={client}>
			<NavBar />
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default App;
