import Image from "next/image";

const ProductHeader = ({ condition, soldQuantity, title, pictures, price }) => {
	return (
		<>
			<div className="w-full px-4 pt-4">
				<div className="mb-2 text-xs">
					<span className="whitespace-pre-wrap text-black text-opacity-[.55]">
						{`${condition === "new" ? "Nuevo" : "Usado"}  |  ${soldQuantity}	vendidos`}
					</span>
				</div>
				<h1 className="pr-2.5 text-base text-black text-opacity-90">{title}</h1>
			</div>
			<div className="relative mt-4">
				<div className="p-4">
					<Image
						alt=""
						height="500"
						layout="responsive"
						objectFit="contain"
						src={pictures[0]}
						width="500"
					/>
				</div>
				<div className="absolute top-0 left-[15px] h-[26px] w-[46px] rounded-xl bg-[#f5f5f5] py-[5px] text-center text-xs font-semibold text-black text-opacity-90">
					<span>1</span>/<span>{pictures.length}</span>
				</div>
			</div>
			<div className="flex">
				<div className="mt-5 mb-1 w-full px-4 text-black text-opacity-90">
					<div className="">
						<span className="text-[32px] font-light">
							{new Intl.NumberFormat("es-AR", {
								style: "currency",
								currency: "ARS",
								maximumFractionDigits: 0,
							}).format(price)}
						</span>
					</div>
					<div>
						<span className="text-sm text-meli-blue">Ver los medios de pago</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductHeader;
