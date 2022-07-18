const ProductSellerInfo = ({ location }) => {
	return (
		<>
			<div className="mt-10 flex">
				<div className="w-full px-4">
					<h3 className="mb-6 text-xl text-black text-opacity-90">Información sobre el vendedor</h3>
					<div className="w-full text-black text-opacity-90">
						<div className="mb-5 flex">
							<figure className="mt-0.5 mr-2.5 w-5 text-center">
								<svg className="h-[18px] w-5" height="16" viewBox="0 0 12 16" width="12">
									<g fill="#000000" fillOpacity="0.9">
										<path
											d="M6.456 15.227l-.457.536-.457-.536C2.255 11.37.594 8.178.594 5.605a5.405 5.405 0 0 1 10.81 0c0 2.573-1.66 5.765-4.948 9.622zM1.794 5.605c0 2.109 1.392 4.889 4.205 8.3 2.813-3.411 4.205-6.191 4.205-8.3a4.205 4.205 0 0 0-8.41 0zM6 6.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"
											fillRule="nonzero"
										/>
									</g>
								</svg>
							</figure>
							<div>
								<p className="text-base text-black text-opacity-90">Ubicación</p>
								<p className="text-sm text-black text-opacity-[.55]">{location}</p>
							</div>
						</div>
						<div className="mb-5 flex">
							<figure className="mt-0.5 mr-2.5 w-5 text-[#00a650]">
								<div className="h-5 w-5">
									<svg fill="#00A650" height="20" width="20">
										<path
											d="m15.998 1.92.848.849-4.093 4.093a5.8 5.8 0 1 1-5.507 0L3.15 2.77 4 1.92l4 4 1.15-1.148L7.144 2.77l.849-.849 2.003 2.004L12 1.921l.849.849-3.43 3.428a5.869 5.869 0 0 1 2.122.178l4.456-4.455zM10 7.368a4.6 4.6 0 1 0 0 9.199 4.6 4.6 0 0 0 0-9.199z"
											fillRule="evenodd"
										/>
									</svg>
								</div>
							</figure>
							<div>
								<p className="text-base font-semibold text-[#00a650]">MercadoLíder Platinum</p>
								<p className="text-sm text-black text-opacity-[.55]">
									¡Es uno de los mejores del sitio!
								</p>
							</div>
						</div>
						<ul className="-ml-1.5 block h-auto w-full overflow-hidden align-baseline">
							<li className="float-left mt-0.5 h-2 w-1/5 border-l-[6px] border-white bg-[#fff0f0]" />
							<li className="float-left mt-0.5 h-2 w-1/5 border-l-[6px] border-white bg-[#fff5e8]" />
							<li className="float-left mt-0.5 h-2 w-1/5 border-l-[6px] border-white bg-[#fffcda]" />
							<li className="float-left mt-0.5 h-2 w-1/5 border-l-[6px] border-white bg-[#f1fdd7]" />
							<li className="float-left h-3 w-1/5 border-l-[6px] border-white bg-[#39b54a]" />
						</ul>
						<div className="mt-4">
							<ul className="flex [&>li]:relative [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:px-[5px] [&>li]:text-center [&>li]:text-xs [&>li]:leading-none [&>li>p]:mt-2 [&>li>p]:leading-none">
								<li className="">
									<strong className="text-2xl leading-[1.2] text-black">12345</strong>
									<p className="">Ventas en los últimos 60 días</p>
								</li>
								<li>
									<strong className="inline w-7 pt-[3px]">
										<div>
											<svg viewBox="0 0 29 24">
												<g fill="none">
													<path
														d="m6.747 21.511 4.538-3.518h8.238c1.032 0 1.868-.98 1.868-2.19V3.21c0-1.21-.836-2.19-1.868-2.19H3.173c-1.032 0-1.869.98-1.869 2.19v14.077c0 .39.316.706.706.706h3.6v2.96a.706.706 0 0 0 1.138.558z"
														stroke="#333"
													/>
													<g transform="translate(14 9)">
														<circle cx="7.5" cy="7.5" fill="#39B54A" r="7.5" />
														<path d="m3.75 7.5 2.445 2.445m.055-.055L11.14 5" stroke="#FFF" />
													</g>
												</g>
											</svg>
										</div>
									</strong>
									<p className="">Brinda buena atención</p>
								</li>
								<li>
									<strong className="inline w-7 pt-[3px]">
										<div>
											<svg viewBox="0 0 30 26">
												<g fill="none">
													<g stroke="#333" transform="translate(1 .02)">
														<ellipse cx="10.5" cy="13.714" rx="10.5" ry="10.286" />
														<path d="M19.107 13.714h-1.59m-14.097 0H1.83m8.67-8.571v1.59m.063 13.838v1.59M10.5.857v2.484M8.75.857h3.637m-2.074 7.944v4.944H5.24" />
													</g>
													<g transform="translate(15 10.02)">
														<circle cx="7.5" cy="7.5" fill="#39B54A" r="7.5" />
														<path d="m3.75 7.5 2.445 2.445m.055-.055L11.14 5" stroke="#FFF" />
													</g>
												</g>
											</svg>
										</div>
									</strong>
									<p>Despacha sus productos a tiempo</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="relative mt-8 inline-block h-[50px] w-full rounded-md border border-black border-opacity-10 py-4 pl-4 pr-[38px] text-sm leading-none text-meli-blue">
						<span>Ver más datos de este vendedor</span>
						<div>
							<svg
								className="absolute right-4 top-1/2 -mt-[7px] h-3.5 w-[9px] stroke-meli-blue"
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
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductSellerInfo;
