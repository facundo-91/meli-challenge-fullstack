const ProductBuyInfo = () => {
	return (
		<>
			<div className="flex">
				<div className="mt-6 w-full px-4">
					<div className="mb-5 flex text-black text-opacity-90">
						<figure className="mr-2.5">
							<svg height="15" viewBox="0 0 18 15" width="18">
								<g fill="#000000" fillOpacity="0.9">
									<path
										d="M7.763 12.207a2.398 2.398 0 0 1-4.726 0H1.8a1.8 1.8 0 0 1-1.8-1.8V2.195a1.8 1.8 0 0 1 1.8-1.8h8.445a1.8 1.8 0 0 1 1.8 1.8v.568l3.322.035L18 6.821v5.386h-2.394a2.398 2.398 0 0 1-4.727 0H7.763zm-.1-1.2h3.182V2.195a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v8.212a.6.6 0 0 0 .6.6h1.337a2.399 2.399 0 0 1 4.526 0zm7.843 0H16.8V7.179l-2.086-3.187-2.669-.029v5.76a2.399 2.399 0 0 1 3.461 1.284zm-2.263 1.99a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396zm-7.843 0a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396z"
										fillRule="nonzero"
									/>
								</g>
							</svg>
						</figure>
						<div className="w-full">
							<p className="mb-0.5 text-base leading-[1.3]">Envíos a todo el país</p>
							<p className="mb-0.5 text-base leading-[1.3] text-black text-opacity-[.55]">
								Conocé los tiempos y las formas de envío.
							</p>
							<div className="inline-block text-sm">
								<div className="text-meli-blue">
									<div className="mr-1.5 inline-block h-3.5 w-2.5">
										<svg
											className="-top-px mr-1.5 h-[13px] w-[11px]"
											height="16"
											viewBox="0 0 12 16"
											width="12">
											<g fill="#3483FA">
												<path
													d="M6.456 15.227l-.457.536-.457-.536C2.255 11.37.594 8.178.594 5.605a5.405 5.405 0 0 1 10.81 0c0 2.573-1.66 5.765-4.948 9.622zM1.794 5.605c0 2.109 1.392 4.889 4.205 8.3 2.813-3.411 4.205-6.191 4.205-8.3a4.205 4.205 0 0 0-8.41 0zM6 6.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"
													fillRule="nonzero"
												/>
											</g>
										</svg>
									</div>
									<span>Calcular cuándo llega</span>
								</div>
							</div>
						</div>
					</div>
					<div className="my-6">
						<p className="text-base font-semibold text-black text-opacity-90">Stock disponible</p>
					</div>
					<div className="mb-[25px]">
						<span className="relative inline-flex h-[50px] w-full rounded-md bg-[#f5f5f5] py-4 pl-4 pr-[38px] text-base leading-none text-black text-opacity-90">
							<span>Cantidad:</span>
							<div>
								<span className="ml-1.5 font-semibold">1</span>
								<svg
									className="absolute right-4 top-1/2 -mt-[7px] h-3.5 w-[9px]"
									height="14"
									viewBox="0 0 9 14"
									width="9">
									<g fill="#000000" fillOpacity="0.25" stroke="#3483FA">
										<path
											d="M1 1.343L6.657 7 1 12.657"
											fill="none"
											fillRule="evenodd"
											strokeWidth="1.5"
										/>
									</g>
								</svg>
							</div>
						</span>
					</div>
					<div className="w-full">
						<button className="mt-2 inline-block h-12 w-full rounded-md bg-meli-blue px-6 text-center text-base font-semibold leading-[48px] text-white">
							Comprar ahora
						</button>
						<button className="mt-2 inline-block h-12 w-full rounded-md bg-[#4189e6] bg-opacity-[15%] px-6 text-center text-base font-semibold leading-[48px] text-meli-blue">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
			<div className="flex">
				<ul className="mt-5 mb-3 w-full px-4 [&>:not(:last-child)]:mb-4">
					<li>
						<div className="flex items-start text-black text-opacity-[.55]">
							<figure className="mt-px mr-2.5">
								<svg className="h-4 w-4" height="12" viewBox="0 0 14 12" width="14">
									<g fill="#000000" fillOpacity="0.55">
										<path d="M2.474 7.2h7.225a2.7 2.7 0 1 0 0-5.4H7V.6h2.7a3.9 3.9 0 1 1 0 7.8H2.473l2.45 2.389-.839.859L.14 7.8l3.945-3.848.838.859L2.473 7.2z" />
									</g>
								</svg>
							</figure>
							<div className="w-full">
								<div className="mb-0.5">
									<p className="text-sm leading-[1.3]">
										<span className="block text-meli-blue">Devolución gratis.</span> Tenés 30 días
										desde que lo recibís.
									</p>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-start text-black text-opacity-[.55]">
							<figure className="mt-px mr-2.5">
								<svg className="h-4 w-4" height="15" viewBox="0 0 14 15" width="14">
									<g fill="#000000" fillOpacity="0.55">
										<path
											d="M.399 3.89v-.6h.6c1.87 0 3.76-.783 5.68-2.374l.383-.317.383.317c1.92 1.59 3.81 2.374 5.68 2.374h.6v.6c0 5.633-2.165 9.242-6.473 10.679l-.19.063-.19-.063C2.564 13.132.4 9.523.4 3.89zm6.663-1.743c-1.8 1.4-3.62 2.179-5.455 2.32.135 4.725 1.947 7.648 5.455 8.898 3.508-1.25 5.32-4.173 5.455-8.898-1.835-.141-3.656-.92-5.455-2.32zm-.905 6.477l3.191-3.582.896.798-4.02 4.513-2.472-2.377.831-.865 1.574 1.513z"
											fillRule="nonzero"
										/>
									</g>
								</svg>
							</figure>
							<div className="w-full">
								<div className="mb-0.5">
									<p className="text-sm leading-[1.3]">
										<span className="text-meli-blue">Compra Protegida</span>, recibí el producto que
										esperabas o te devolvemos tu dinero.
									</p>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-start text-black text-opacity-[.55]">
							<figure className="mt-px mr-2.5">
								<svg className="h-4 w-4" height="14" viewBox="0 0 14 14" width="14">
									<g fill="#000000" fillOpacity="0.55">
										<path
											d="M7.598 8.746v1.252h.6c1.657 0 3 1.343 3.001 3v.6H2.798v-.602a2.998 2.998 0 0 1 2.998-2.997h.604l-.001-1.253a3.435 3.435 0 0 1-1.578-.724l-1.586-.446-.106-.041-.739-.37A3.6 3.6 0 0 1 .402 3.947V1.599h2.486l-.2-1.2h8.618l-.2 1.2h2.489v2.346a3.6 3.6 0 0 1-1.988 3.22l-.739.37-.106.041-1.592.448a3.43 3.43 0 0 1-1.572.722zm2.65-2.272l.134-.037.688-.345a2.4 2.4 0 0 0 1.326-2.147V2.799h-1.49l-.52 3.13c-.032.187-.078.37-.138.545zm-6.505-.001a3.453 3.453 0 0 1-.139-.552L3.087 2.8H1.602v1.148a2.4 2.4 0 0 0 1.325 2.145l.687.345.129.036zm.361-4.874l.684 4.126a2.24 2.24 0 0 0 2.21 1.874c1.092 0 2.024-.79 2.204-1.868L9.89 1.6H4.104zm4.094 9.6H5.795c-.784 0-1.45.5-1.697 1.199h5.799c-.248-.699-.915-1.2-1.7-1.2z"
											fillRule="nonzero"
										/>
									</g>
								</svg>
							</figure>
							<div className="w-full">
								<div className="mb-0.5">
									<p className="text-sm leading-[1.3]">
										<span className="text-meli-blue">Mercado Puntos</span>. Sumás 13 puntos.
									</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div className="mt-5 flex items-center justify-center border-b border-black border-opacity-10 pb-10">
				<div className="mr-[30px] flex h-5 items-center">
					<svg className="h-[18px] w-5" height="20" viewBox="0 0 22 20" width="22">
						<g fill="none" fillRule="evenodd" stroke="#3483FA" strokeWidth="1.5px">
							<g fill="none" stroke="#3483FA" strokeWidth="1.5px">
								<path
									d="M10.977 2.705C11.93 1.618 13.162 1 14.895 1c3.333 0 5.607 2.152 5.607 6.274 0 .08-.002.16-.005.24-.107 2.596-1.876 5.253-4.737 7.892a33.77 33.77 0 0 1-3.165 2.57 32.447 32.447 0 0 1-1.45.983l-.394.243-.394-.243-.009-.005-.021-.014-.08-.05a32.447 32.447 0 0 1-1.34-.914 33.77 33.77 0 0 1-3.165-2.57c-2.86-2.639-4.63-5.296-4.737-7.892A5.839 5.839 0 0 1 1 7.274C1 3.152 3.274 1 6.607 1c1.733 0 2.966.618 3.918 1.705.056.064.137.165.226.282.09-.117.17-.218.226-.282z"
									stroke="#3483FA"
								/>
							</g>
						</g>
					</svg>
					<span className="ml-2 text-sm text-meli-blue">Agregar a favoritos</span>
				</div>
				<div className="flex h-5 items-center">
					<svg className="fill-meli-blue" height="20" viewBox="0 0 20 20" width="20">
						<path
							d="M7.565 11.848a3.002 3.002 0 1 1 0-3.707l4.337-2.173a3.006 3.006 0 0 1 2.9-3.783 3.002 3.002 0 1 1-2.362 4.856L8.102 9.214a3.006 3.006 0 0 1 0 1.562l4.337 2.17a3.002 3.002 0 1 1-.537 1.073l-4.337-2.17zm-2.363-.05a1.802 1.802 0 1 0 0-3.605 1.802 1.802 0 0 0 0 3.604zm9.6 4.802a1.802 1.802 0 1 0 0-3.605 1.802 1.802 0 0 0 0 3.605zm0-9.61a1.802 1.802 0 1 0 0-3.605 1.802 1.802 0 0 0 0 3.605z"
							fillRule="nonzero"
						/>
					</svg>
					<span className="ml-2 text-sm text-meli-blue">Compartir</span>
				</div>
			</div>
		</>
	);
};

export default ProductBuyInfo;
