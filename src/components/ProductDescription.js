const ProductDescription = ({ description }) => {
	return (
		<div>
			<div className="border-b border-black border-opacity-10 py-10 px-4 text-black text-opacity-90 lg:border-none lg:py-0 lg:px-12">
				<h2 className="mb-6 text-xl leading-tight lg:text-2xl">Descripción</h2>
				<p className="text-base lg:text-xl lg:text-[#666]">{description}</p>
			</div>
		</div>
	);
};

export default ProductDescription;
