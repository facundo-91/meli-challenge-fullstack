import { useQuery, gql } from "@apollo/client";
import SearchToolbar from "./SearchToolbar";
import SearchResults from "./SearchResults";
import SearchHeader from "./SearchHeader";
import SearchSidebar from "./SearchSidebar";
import LoadingSpinner from "./LoadingSpinner";

export const GET_PRODUCTS = gql`
	query GetProducts($query: String!, $sortOrder: String!, $filters: String) {
		products(query: $query, sortOrder: $sortOrder, filters: $filters) {
			results {
				id
				title
				price
				image
				free_shipping
			}
			total_products
			sort_order
			filters {
				id
				name
				values {
					id
					name
				}
			}
			available_filters {
				id
				name
				values {
					id
					name
					results
				}
			}
			path_from_root {
				id
				name
			}
		}
	}
`;

const SearchMain = ({ searchQuery }) => {
	const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
		variables: { query: searchQuery, sortOrder: "relevance" },
		notifyOnNetworkStatusChange: true,
	});

	if (loading) return <LoadingSpinner />;
	if (error) return <div>Error:{error.message}</div>;

	const { products } = data;

	const NotResults = () => {
		return (
			<main className="flex h-[calc(100vh-101px)] w-full bg-[#f5f5f5] antialiased dark:bg-dark-primary lg:bg-[#ededed] lg:dark:bg-dark-primary">
				<div className="mx-auto my-0 max-w-[1220px] flex-grow py-0 lg:px-2.5">
					<div className="flex min-h-[204px] max-w-[1018px] flex-col items-center justify-center rounded bg-white px-[13px] pt-[18px] pb-8 dark:bg-dark-secundary lg:my-12 lg:mx-auto lg:flex-row lg:px-10 lg:pt-[42px] lg:pb-8">
						<div className="mr-[35px] -mt-2  hidden align-middle lg:inline-block">
							<svg
								className="mr-[35px] -mt-2 inline-block h-20 w-20 align-middle"
								viewBox="0 0 80 80">
								<g fill="none" fillRule="evenodd">
									<path
										className="stroke-[#484848] dark:stroke-dark-text"
										d="M37.891 50.705c4.584-1.85 8.61-5.256 11.216-9.957m2.764-9.071c.456-5.499-1.142-10.977-4.48-15.29a21.276 21.276 0 0 0-6.53-5.599c-5.845-3.24-12.566-3.444-18.403-1.139-4.65 1.836-8.739 5.265-11.375 10.022a22.488 22.488 0 0 0-2.832 10.308 22.102 22.102 0 0 0 3.058 11.86 21.288 21.288 0 0 0 8.02 7.79 21.275 21.275 0 0 0 8.427 2.594 21.853 21.853 0 0 0 10.135-1.518"
										strokeLinecap="round"
									/>
									<path
										className="stroke-[#484848] dark:stroke-dark-text"
										d="M28.774 45.86a16.046 16.046 0 0 1-9.688-4.642m-3.693-5.7c-1.4-3.695-1.38-7.782.065-11.41a15.238 15.238 0 0 1 3.392-5.144c3.384-3.384 7.97-4.852 12.444-4.417 3.564.346 7.056 1.9 9.81 4.654 1.9 1.9 3.23 4.153 3.984 6.538a15.83 15.83 0 0 1 .236 8.768 15.246 15.246 0 0 1-3.984 6.947 15.237 15.237 0 0 1-5.289 3.449 15.651 15.651 0 0 1-7.277.956"
										strokeLinecap="round"
									/>
									<g className="fill-[#484848] dark:fill-dark-text" fillRule="nonzero">
										<path d="M35.644 35.95l-12-12 .572-.572 12 12z" />
										<path d="M36.215 23.95l-12 12-.57-.572 11.999-12z" />
									</g>
									<path
										className="stroke-[#484848] dark:stroke-dark-text"
										d="M52.267 52.61l-6.646-6.647"
										strokeLinecap="square"
									/>
									<path
										d="M61.601 54.585l-2.823-2.824c-1.405-1.405-3.988-1.099-5.768.682-1.78 1.78-2.087 4.363-.682 5.768l9.599 9.599 8.89 8.89c1.403 1.404 3.987 1.098 5.767-.682 1.78-1.78 2.086-4.364.683-5.768"
										fill="#FFDB15"
									/>
									<path
										d="M52.095 58.273c-1.404-1.405-1.283-3.803.27-5.356s3.951-1.674 5.356-.27l9.6 9.6 8.89 8.89"
										stroke="#484848"
										strokeLinecap="round"
									/>
								</g>
							</svg>
						</div>
						<div className="block lg:hidden">
							<div className="flex rounded-[3px] border border-black border-opacity-10 pt-4 pr-3 pb-[5px] pl-[13px] leading-5 text-black text-opacity-[.55] dark:border-[#ddd] dark:border-opacity-10">
								<svg className="h-[51px] w-[70px] fill-[#f5cc00]" viewBox="0 0 1792 1792">
									<path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
								</svg>
								<p className="ml-[13px] mt-0.5 dark:text-dark-text">
									No hay publicaciones que coincidan con tu búsqueda.
								</p>
							</div>
						</div>
						<div>
							<h3 className="hidden text-2xl font-semibold leading-[1.08] dark:text-dark-text lg:block">
								No hay publicaciones que coincidan con tu búsqueda.
							</h3>
							<ul className="mt-[25px] mr-2.5 mb-2.5 ml-0 text-sm font-normal lg:mt-[18px] lg:text-base lg:font-light [&>li]:ml-[18px] [&>li]:mb-[3px] [&>li]:list-outside [&>li]:list-disc [&>li]:leading-[1.231] [&>li]:text-black [&>li]:text-opacity-90 dark:[&>li]:text-dark-text">
								<li>
									<strong className="font-semibold">Revisá la ortografía</strong> de la palabra.
								</li>
								<li>
									Utilizá <strong className="font-semibold">palabras más genéricas</strong> o menos
									palabras.
								</li>
								<li>Navegá por las categorías para encontrar un producto similar</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		);
	};

	if (products.results.length === 0) return <NotResults />;

	return (
		<main className="w-full flex-col items-center bg-[#f5f5f5] antialiased dark:bg-dark-primary lg:flex lg:bg-[#ededed] lg:dark:bg-dark-primary">
			<SearchToolbar
				availableFilters={products.available_filters}
				filters={products.filters}
				refetch={refetch}
				sortedBy={products.sort_order}
			/>
			<SearchHeader filterBy={refetch} filters={products.filters} searchQuery={searchQuery} />
			<div className="flex w-full max-w-[1215px] pb-8 lg:mt-4 lg:pl-2.5 lg:pr-7">
				<SearchSidebar filterBy={refetch} products={products} searchQuery={searchQuery} />
				<SearchResults products={products} sort={refetch} />
			</div>
		</main>
	);
};

export default SearchMain;
