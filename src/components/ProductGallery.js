import Image from "next/image";
import { Fragment, useState } from "react";

const ProductGallery = ({ pictures }) => {
	const [selectedPicUrl, setSelectedPicUrl] = useState(pictures[0]);

	const handleChange = (e) => {
		const { value } = e.target;

		setSelectedPicUrl(pictures[value]);
	};

	return (
		<div className="h-full min-h-[500px] w-[486px]">
			<div className="relative mt-4 ml-4 h-auto w-full">
				<div className="absolute top-0 left-[50px] mt-6 h-full min-h-[500px] w-[410px] p-4">
					<Image
						unoptimized
						alt=""
						className="dark:rounded dark:bg-white"
						height="500"
						layout="responsive"
						objectFit="contain"
						src={selectedPicUrl}
						width="500"
					/>
				</div>
				<div>
					{pictures.slice(0, 3).map((pic, i) => {
						return (
							<Fragment key={i}>
								<input
									className="hidden"
									defaultChecked={i === 0}
									id={pic.slice(27, -4)}
									name="gallery-radio"
									type="radio"
									value={i}
									onChange={(e) => handleChange(e)}
								/>
								<span className="mb-2 block ">
									<label htmlFor={pic.slice(27, -4)}>
										<div
											className={`inline-flex cursor-pointer rounded dark:bg-white ${
												pic === selectedPicUrl
													? "border-2 border-meli-blue border-opacity-100"
													: "border border-black border-opacity-25"
											}`}>
											<div className={`h-12 w-12 p-0.5 ${pic === selectedPicUrl ? "-m-px" : ""}`}>
												<Image
													unoptimized
													alt=""
													height="44"
													layout="responsive"
													objectFit="contain"
													src={pic}
													width="44"
												/>
											</div>
										</div>
									</label>
								</span>
							</Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;
