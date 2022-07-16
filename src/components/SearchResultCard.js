import Image from "next/image";
import Link from "next/link";

const SearchResultCard = ({ id, title, price, image, freeShipping }) => {
	return (
		<li>
			<div className="my-px flex bg-white py-3 lg:py-5 lg:pr-[50px]">
				<div className="mx-3">
					<Link href={`/product/${id}`}>
						<a>
							<div className="relative h-36 w-36 lg:h-40 lg:w-40">
								<div className="absolute z-10 h-full w-full rounded-md bg-black bg-opacity-[0.04] lg:hidden" />
								<Image alt="" layout="fill" objectFit="contain" src={image} />
							</div>
						</a>
					</Link>
				</div>
				<div className="w-full">
					<Link href={`/product/${id}`}>
						<a>
							<div className="mb-1">
								<h2 className="text-sm font-medium leading-[1.3] text-[#333] lg:text-xl lg:font-light lg:leading-[1.3]">
									{title}
								</h2>
							</div>
							<div className="mb-2 flex text-xl leading-tight text-[#333] lg:text-2xl">
								<p>
									{new Intl.NumberFormat("es-AR", {
										style: "currency",
										currency: "ARS",
										maximumFractionDigits: 0,
									}).format(price)}
								</p>
							</div>
							<div className="flex">
								<p className="inline-flex">
									<span className="rounded-[3px] bg-[#e6f7ee] px-1 pt-0.5 pb-[3px] text-xs font-semibold leading-[14px] text-[#00a650] lg:bg-[#00a650] lg:px-1.5 lg:pt-1 lg:pb-1 lg:text-sm lg:leading-none lg:text-white">
										{`Llega${freeShipping ? " gratis " : " "}mañana`}
									</span>
								</p>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</li>
	);
};

export default SearchResultCard;
