const SearchSidebar = ({ searchQuery, totalResults }) => {
	return (
		<aside className="hidden w-full max-w-[294px] pr-3.5 lg:block">
			<div>
				<h1 className="text-[26px] font-semibold capitalize leading-[30px] text-[#333] dark:text-dark-text">
					{searchQuery}
				</h1>
			</div>
			<div className="mb-4 mt-1 flex items-center">
				<span className="text-sm font-light leading-[1.29] text-[#333] dark:text-dark-text">
					{totalResults} resultados
				</span>
			</div>
			<section className="mt-9">
				<div className="w-[242px]">
					<div className="my-1 flex w-full items-center justify-between rounded-md border border-[#ddd] bg-white p-4 dark:border-opacity-10 dark:bg-dark-secundary">
						<span className="text-sm font-semibold text-black text-opacity-80 dark:text-dark-text">
							Llegan mañana
						</span>
						<div className="ml-1.5 inline-block h-4 w-8">
							<span className="relative inline-block h-[18px] w-[34px] rounded-[25px] bg-[#d8d8d8] after:absolute after:left-0 after:my-px after:mx-0.5 after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:bg-opacity-25" />
						</div>
					</div>
				</div>
				<div className="w-[242px]">
					<div className="my-1 flex items-center justify-between rounded-md border border-[#ddd] bg-white p-4 dark:border-opacity-10 dark:bg-dark-secundary">
						<div className="flex flex-col">
							<div className="inline-block text-sm font-semibold leading-[15px] text-black text-opacity-80 dark:text-dark-text">
								<svg
									className="mr-1.5 inline h-[15px] w-[45px] fill-[#00a650]"
									height="13"
									viewBox="0 0 41 13"
									width="41">
									<path
										d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"
										fillRule="nonzero"
									/>
								</svg>
								te ahorra envíos
							</div>
							<span className="mt-[5px] inline-block text-xs leading-[15px] text-black text-opacity-80 dark:text-dark-text">
								Con tu carrito de compras
							</span>
						</div>
						<div className="ml-1.5 inline-block h-4 w-8">
							<span className="relative inline-block h-[18px] w-[34px] rounded-[25px] bg-[#d8d8d8] after:absolute after:left-0 after:my-px after:mx-0.5 after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:bg-opacity-25" />
						</div>
					</div>
				</div>
				<div className="w-[242px]">
					<div className="my-1 flex items-center justify-between rounded-md border border-[#ddd] bg-white p-4 dark:border-opacity-10 dark:bg-dark-secundary">
						<span className="text-sm font-semibold text-black text-opacity-80 dark:text-dark-text">
							Envío gratis
						</span>
						<div className="ml-1.5 inline-block h-4 w-8">
							<span className="relative inline-block h-[18px] w-[34px] rounded-[25px] bg-[#d8d8d8] after:absolute after:left-0 after:my-px after:mx-0.5 after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:shadow-black/[55%] after:content-[''] dark:bg-opacity-25" />
						</div>
					</div>
				</div>
			</section>
		</aside>
	);
};

export default SearchSidebar;
