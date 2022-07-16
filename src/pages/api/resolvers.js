export const resolvers = {
	Query: {
		products: (_, args) =>
			fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${args.query}`)
				.then((res) => res.json())
				.then((response) =>
					response.results.slice(0, 10).map((rawProduct) => ({
						id: rawProduct.id,
						title: rawProduct.title,
						image: rawProduct.thumbnail.replace("I.jpg", "O.jpg"),
						price: rawProduct.price,
						free_shipping: rawProduct.shipping.free_shipping,
					})),
				),
		product: (_, args) =>
			fetch(`https://api.mercadolibre.com/items/${args.id}`)
				.then((res) => res.json())
				.then((rawProduct) => ({
					id: rawProduct.id,
					price: rawProduct.price,
					title: rawProduct.title,
					image: rawProduct.thumbnail,
					location: rawProduct.seller_address.state.name,
				})),
	},
};
