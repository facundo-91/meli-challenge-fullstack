const ProductQuestions = () => {
	return (
		<div className="flex">
			<div className="py-10 px-4">
				<h2 className="text-xl leading-tight">Preguntas y respuestas</h2>
				<div className="mt-6">
					<h3 className="pb-[18px] text-lg font-semibold leading-tight text-black text-opacity-90">
						¿Qué querés saber?
					</h3>
					<div className="-mt-2 -ml-2">
						<div className="inline-block text-sm">
							<span className="mt-2 ml-2 inline-block h-8 rounded-[5px] bg-[#4189e6] bg-opacity-[15%] px-3 text-center text-sm font-semibold leading-8 text-meli-blue">
								Costo y tiempo de envío
							</span>
						</div>
						<div className="inline-block text-sm">
							<span className="mt-2 ml-2 inline-block h-8 rounded-[5px] bg-[#4189e6] bg-opacity-[15%] px-3 text-center text-sm font-semibold leading-8 text-meli-blue">
								Devoluciones gratis
							</span>
						</div>
						<div className="inline-block text-sm">
							<span className="mt-2 ml-2 inline-block h-8 rounded-[5px] bg-[#4189e6] bg-opacity-[15%] px-3 text-center text-sm font-semibold leading-8 text-meli-blue">
								Medios de pago y promociones
							</span>
						</div>
						<div className="inline-block text-sm">
							<span className="mt-2 ml-2 inline-block h-8 rounded-[5px] bg-[#4189e6] bg-opacity-[15%] px-3 text-center text-sm font-semibold leading-8 text-meli-blue">
								Garantía
							</span>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<p className="text-lg font-semibold text-black text-opacity-90">Preguntale al vendedor</p>
					<div className="mt-4">
						<div className="flex rounded-md shadow-[0_0_0_1px_rgb(0,0,0,25%)]">
							<textarea
								className="block min-h-[64px] grow resize-none rounded-md pt-[15px] pr-3 pb-[13px] pl-4 leading-none"
								placeholder="Escribí una pregunta..."
								rows="1"
							/>
						</div>
						<button className="mt-[18px] inline-block h-12 w-full rounded-md bg-meli-blue px-6 text-center text-base font-semibold leading-[48px] text-white">
							Preguntar
						</button>
					</div>
				</div>
				<div className="my-10 text-center text-black text-opacity-[.55]">
					<p className="text-sm font-semibold">Nadie hizo preguntas todavía.</p>
					<p className="text-sm">¡Hacé la primera!</p>
				</div>
			</div>
		</div>
	);
};

export default ProductQuestions;
