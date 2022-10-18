export const resolvers = {
	Query: {
		products: async (_, args) => {
			const api = `https://api.mercadolibre.com/sites/MLA/search?q=${args.query}&limit=10&sort=${args.sortOrder}`;
			const hasFilter = args.filters !== "";
			const searchURL = hasFilter ? `${api}${args.filters}` : api;
			const searchResult = await fetch(searchURL)
				.then((res) => res.json())
				.then((response) => ({
					results: response.results.map((rawProduct) => ({
						id: rawProduct.id,
						title: rawProduct.title,
						price: rawProduct.price,
						image: `https://http2.mlstatic.com/D_NQ_NP_${rawProduct.thumbnail_id}-V.jpg`,
						free_shipping: rawProduct.shipping.free_shipping,
					})),
					total_products: response.paging.total,
					sort_order: response.sort.id,
					filters: response.filters,
					available_filters: response.available_filters,
					path_from_root: response.filters[0]?.values[0]?.path_from_root,
				}));

			return searchResult;
		},
		product: async (_, args) => {
			const productData = await fetch(`https://api.mercadolibre.com/items/${args.id}`)
				.then((res) => res.json())
				.then((rawProduct) => ({
					id: rawProduct.id,
					title: rawProduct.title,
					price: rawProduct.price,
					location: rawProduct.seller_address.city.name.concat(
						",",
						" ",
						rawProduct.seller_address.state.name,
					),
					product_id: rawProduct.catalog_product_id,
					condition: rawProduct.condition,
					pictures: rawProduct.pictures.map((pic) => pic.secure_url),
				}));

			const productData2 = await fetch(`https://api.mercadolibre.com/items/${args.id}/description`)
				.then((res) => res.json())
				.then((rawProduct) => ({
					description: rawProduct.plain_text,
				}));

			const productData3 = await fetch(
				`https://api.mercadolibre.com/products/${productData.product_id}`,
			)
				.then((res) => res.json())
				.then((rawProduct) => ({
					sold_quantity: rawProduct.sold_quantity,
				}));

			return { ...productData, ...productData2, ...productData3 };
		},
	},
};
