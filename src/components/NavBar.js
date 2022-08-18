import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logoSmall from "../../public/assets/logo__small.png";
import logoLarge from "../../public/assets/logo__large_plus.png";
import mercadoPuntos from "../../public/assets/mercado_puntos.webp";

const NavBar = () => {
	const [searchInput, setSearchInput] = useState("");
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();

	const submitSearch = (e) => {
		e.preventDefault();
		const trimedInput = searchInput.trim();

		if (trimedInput.length > 0) {
			router.push(`/search/${trimedInput}`);
		}
	};

	const toggleMenu = () => {
		setIsMenuOpen((toggle) => !toggle);
	};

	useEffect(() => {
		const checkViewport = () => {
			setIsDesktop(window.innerWidth >= 1024);
		};

		checkViewport();
		window.addEventListener("resize", checkViewport);

		return () => window.removeEventListener("resize", checkViewport);
	}, []);

	const HamburgerMenu = () => {
		return (
			<nav className="relative border-t border-[#e5d850] shadow-[0_1px_1px_0_rgb(0,0,0,10%)] before:absolute before:-top-1.5 before:right-[62px] before:h-2.5 before:w-2.5 before:rotate-45 before:border before:border-transparent before:border-t-[#e5d850] before:border-l-[#e5d850] before:bg-meli-yellow before:content-['']">
				<div className="py-3 px-4">
					<div className="float-left mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ededed]">
						<svg height="35" width="28">
							<path
								d="M27.343 33.706l-1.356.64A13.25 13.25 0 0 0 14 26.75c-5.17 0-9.8 2.988-11.978 7.578l-1.356-.643A14.75 14.75 0 0 1 14 25.25a14.75 14.75 0 0 1 13.343 8.456zM14 21.75C8.063 21.75 3.25 16.937 3.25 11S8.063.25 14 .25 24.75 5.063 24.75 11 19.937 21.75 14 21.75zm0-1.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5zm0-2.5v-1.5a5.25 5.25 0 1 0 0-10.5v-1.5a6.75 6.75 0 0 1 0 13.5z"
								fill="#BBB"
								fillRule="nonzero"
							/>
						</svg>
					</div>
					<h3 className="my-1 font-semibold leading-none">Bienvenido</h3>
					<p className="m-0 text-sm leading-[1.14] text-black text-opacity-[0.45]">
						Ingresá a tu cuenta para ver tus compras, favoritos, etc.
					</p>
					<div className="mt-3.5">
						<button className="mr-1 w-[48%] rounded border border-meli-blue bg-meli-blue py-3 text-sm font-semibold leading-none text-white xs:w-[40%] md:w-[44%]">
							Ingresá
						</button>
						<button className="w-[48%] rounded border border-meli-blue bg-white py-3 text-sm font-semibold leading-none text-meli-blue xs:w-[40%] md:w-[44%]">
							Creá tu cuenta
						</button>
					</div>
				</div>
				<div className="border-t border-black border-opacity-10 bg-white">
					<ul className="py-4 text-sm [&>li]:cursor-pointer [&>li]:py-1 [&>li>div]:min-h-[39px] [&>li>div]:py-2 [&>li>div]:pl-[26px] [&>li>div]:pr-5 [&>li>div]:font-semibold [&>li>div]:leading-[23px]">
						<li className="bg-[#f7f7f7] text-meli-blue">
							<div className="">
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Inicio</span>
							</div>
						</li>
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Ofertas</span>
							</div>
						</li>
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Historial</span>
							</div>
						</li>
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Ayuda</span>
							</div>
						</li>
					</ul>
					<ul className="py-4 text-sm [&>li]:cursor-pointer [&>li]:py-1 [&>li>div]:min-h-[39px] [&>li>div]:py-2 [&>li>div]:pl-[26px] [&>li>div]:pr-5 [&>li>div]:font-semibold [&>li>div]:leading-[23px]">
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Supermercado</span>
							</div>
						</li>
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Moda</span>
							</div>
						</li>
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Más vendidos</span>
							</div>
						</li>
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Tiendas oficiales</span>
							</div>
						</li>
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Categorías</span>
							</div>
						</li>
					</ul>
					<ul className="py-4 text-sm [&>li]:cursor-pointer [&>li]:py-1 [&>li>div]:min-h-[39px] [&>li>div]:py-2 [&>li>div]:pl-[26px] [&>li>div]:pr-5 [&>li>div]:font-semibold [&>li>div]:leading-[23px]">
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Resumen</span>
							</div>
						</li>
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>Vender</span>
							</div>
						</li>
					</ul>
					<ul className="py-4 text-sm [&>li]:cursor-pointer [&>li]:py-1 [&>li>div]:min-h-[39px] [&>li>div]:py-2 [&>li>div]:pl-[26px] [&>li>div]:pr-5 [&>li>div]:font-semibold [&>li>div]:leading-[23px]">
						<li>
							<div>
								<span className="float-left mr-[18px] inline-block h-5 w-5 text-xl leading-[23px] before:text-center before:font-navigation before:font-normal before:content-['']" />
								<span>¡Comprá y vendé con la app!</span>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	};

	return (
		<header className="bg-meli-yellow text-[#333] antialiased">
			<div className="mx-auto max-w-[1200px]">
				<div className="flex h-12 items-center lg:h-14">
					<Link href="/">
						<a className="mx-3 flex h-8 w-11 items-center lg:h-14 lg:w-36">
							{isDesktop ? (
								<Image alt="ML Logo" height="34" layout="fixed" src={logoLarge} width="134" />
							) : (
								<Image
									priority
									alt="ML Logo"
									height="32"
									layout="fixed"
									src={logoSmall}
									width="44"
								/>
							)}
						</a>
					</Link>
					<form
						className="relative z-10 flex h-full grow items-center lg:left-[35px]"
						onSubmit={submitSearch}>
						<div className="relative flex w-full shadow-[0_1px_2px_0_rgb(0,0,0,20%)] lg:max-w-[600px]">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 lg:hidden">
								<span className="font-navigation text-[13px] leading-[18px] text-[#aaa] before:content-['\EA2A']" />
							</div>
							<input
								className="h-8 w-full rounded-sm border-none pl-9 pt-[5px] pb-[7px] pr-3.5 outline-none placeholder:font-thin placeholder:text-black placeholder:text-opacity-25 focus:outline-offset-0 lg:h-10 lg:rounded-tr-none lg:rounded-br-none lg:pt-[7px] lg:pb-[9px] lg:pl-[15px] lg:placeholder:font-normal"
								placeholder={isDesktop ? "Buscar productos, marcas y más..." : "Estoy buscando..."}
								type="search"
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<button
								className="hidden w-[46px] items-center rounded-tr-sm rounded-br-sm bg-white pt-px lg:flex"
								type="submit">
								<div className="h-[26px] w-full border-l border-[#e6e6e6] bg-white">
									<span className="h-full font-navigation text-[#666] before:content-['']" />
								</div>
							</button>
						</div>
					</form>
					<div className="mr-2.5 hidden max-h-10 max-w-[340px] lg:block">
						<Image priority alt="ML Logo" height="78" src={mercadoPuntos} width="680" />
					</div>
					<div
						className="ml-1 flex h-12 w-[45px] cursor-pointer flex-col justify-center space-y-1.5 lg:hidden"
						onClick={toggleMenu}>
						<span
							className={`mx-auto block h-px w-5 bg-gray-800 transition-all ${
								isMenuOpen ? "translate-y-2 rotate-45" : ""
							}`}
						/>
						<span
							className={`mx-auto block h-px w-5 bg-gray-800 transition-all ${
								isMenuOpen ? "scale-0" : ""
							}`}
						/>
						<span
							className={`mx-auto block h-px w-5 bg-gray-800 transition-all ${
								isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
							}`}
						/>
					</div>
					<div className="flex h-12 w-[45px] items-center justify-center lg:hidden">
						<span className="font-navigation text-lg leading-[50px] before:content-['\EA1F'] lg:text-base lg:leading-[27px]" />
					</div>
				</div>
				{isMenuOpen ? (
					<HamburgerMenu />
				) : (
					<div className="flex items-center border-t border-black border-opacity-10 text-[#736c28] lg:h-11 lg:items-start lg:border-none lg:pt-[5px] lg:text-[#333]">
						<span className="ml-3 mr-2 font-navigation text-base before:content-[''] lg:text-[23px] lg:before:content-['']" />
						<div className="flex-1 lg:flex lg:flex-initial lg:flex-col">
							<span className="text-[13px] leading-[38px] lg:text-xs lg:leading-none lg:text-black lg:text-opacity-50">
								Enviar a
							</span>
							<span className=" text-[13px] leading-[38px] lg:leading-none"> Capital Federal</span>
						</div>
						<div className="ml-[72px] hidden h-full flex-1 items-center text-sm leading-[22px] lg:flex">
							<ul className="flex space-x-5 [&>li]:cursor-pointer [&>li]:text-[#333] [&>li]:text-opacity-60 hover:[&>li]:text-opacity-90">
								<li>Categorías</li>
								<li>Ofertas</li>
								<li>Historial</li>
								<li>Supermercado</li>
								<li>Vender</li>
								<li>Ayuda</li>
							</ul>
						</div>
						<div className="mr-1 hidden h-full items-center text-sm lg:flex">
							<ul className="flex space-x-5 [&>li]:cursor-pointer [&>li]:text-[#333] hover:[&>li]:text-black">
								<li>Creá tu cuenta</li>
								<li>Ingresá</li>
								<li>Mis compras</li>
							</ul>
							<span className="ml-5 mr-1.5 cursor-pointer font-navigation text-base leading-[27px] before:content-['\EA1F'] hover:text-black" />
						</div>
						<span className="mx-4 h-2 w-2 -rotate-45 border-t-0 border-r-2 border-b-2 border-l-0 border-[#c1b74d] lg:hidden" />
					</div>
				)}
			</div>
		</header>
	);
};

export default NavBar;
