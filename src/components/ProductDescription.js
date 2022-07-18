const ProductDescription = ({ description }) => {
	return (
		<div>
			<div className="border-b border-black border-opacity-10 py-10 px-4 text-black text-opacity-90">
				<h2 className="mb-6 text-xl leading-tight">Descripción</h2>
				<p className=" text-base">{description}</p>
			</div>
		</div>
	);
};

export default ProductDescription;
