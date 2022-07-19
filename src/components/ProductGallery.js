import Image from "next/image";

const ProductGallery = ({ pictures }) => {
	return (
		<div className="relative h-full min-h-[500px] w-[486px]">
			<div className="mt-4 ml-4 h-auto w-full">
				<div className="absolute top-0 left-[50px] mt-6 h-full min-h-[500px] w-[410px] p-4">
					<Image
						alt=""
						height="500"
						layout="responsive"
						objectFit="contain"
						src={pictures[0]}
						width="500"
					/>
				</div>
				<div className="[&>div:first-child>div>div]:border-2 [&>div:first-child>div>div]:border-meli-blue [&>div:first-child>div>div]:border-opacity-100">
					{pictures.map((pic, i) => {
						return (
							<div key={i} className="mb-2">
								<div className="inline-block">
									<div className="rounded border border-black border-opacity-25">
										<div className="h-12 w-12 p-0.5">
											<Image
												alt=""
												height="44"
												layout="responsive"
												objectFit="contain"
												src={pic}
												width="44"
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;
