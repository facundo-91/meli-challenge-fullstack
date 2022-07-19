const Home = () => {
	return (
		<div className="flex h-[calc(100vh-87px)] items-center justify-center bg-[#f5f5f5] lg:h-[calc(100vh-100px)] lg:bg-[#ededed]">
			<div className="text-center">
				<h1 className="text-xl font-bold">Challenge Fullstack de MeLi</h1>
				<h2 className=" text-lg">Contacto:</h2>
				<a
					className="mx-2 text-meli-blue"
					href="https://facundo-91.github.io"
					rel="noreferrer"
					target="_blank">
					Portfolio
				</a>
				<a
					className="mx-2 text-meli-blue"
					href="https://github.com/facundo-91"
					rel="noreferrer"
					target="_blank">
					Github
				</a>
				<a
					className="mx-2 text-meli-blue"
					href="https://www.linkedin.com/in/facundo-91/"
					rel="noreferrer"
					target="_blank">
					LinkedIn
				</a>
			</div>
		</div>
	);
};

export default Home;
