import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import logoSmall from "../../public/assets/logo__small.png";
import logoLarge from "../../public/assets/logo__large_plus.png";

const NavBar = () => {
	const [searchInput, setSearchInput] = useState("");
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
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

	useEffect(() => setIsMounted(true), []);

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
			<nav className="relative border-t border-[#e5d850] shadow-[0_1px_1px_0_rgb(0,0,0,10%)] before:absolute before:-top-1.5 before:right-[17px] before:h-2.5 before:w-2.5 before:rotate-45 before:border before:border-transparent before:border-t-[#e5d850] before:border-l-[#e5d850] before:bg-meli-yellow before:content-[''] dark:border-[#ddd] dark:border-opacity-10 dark:before:border-t-[#ddd] dark:before:border-l-[#ddd] dark:before:border-opacity-10 dark:before:bg-dark-secundary">
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
					<h3 className="my-1 font-semibold leading-none dark:text-dark-text">Bienvenido</h3>
					<p className="m-0 text-sm leading-[1.14] text-black text-opacity-[0.45] dark:text-dark-text dark:text-opacity-50">
						Ingresá a tu cuenta para ver tus compras, favoritos, etc.
					</p>
					<div className="mt-3.5">
						<button className="mr-1 w-[48%] rounded border border-meli-blue bg-meli-blue py-3 text-sm font-semibold leading-none text-white xs:w-[40%] md:w-[44%]">
							Ingresá
						</button>
						<button className="w-[48%] rounded border border-meli-blue bg-white py-3 text-sm font-semibold leading-none text-meli-blue dark:bg-dark-secundary xs:w-[40%] md:w-[44%]">
							Creá tu cuenta
						</button>
					</div>
				</div>
				<div className="border-t border-[#ddd] bg-white dark:border-opacity-10 dark:bg-dark-primary">
					<ul className="py-4 text-sm [&>li]:cursor-pointer [&>li]:py-1 [&>li>div]:min-h-[39px] [&>li>div]:py-2 [&>li>div]:pl-[26px] [&>li>div]:pr-5 [&>li>div]:font-semibold [&>li>div]:leading-[23px]">
						<li className="bg-[#f7f7f7] text-meli-blue dark:bg-dark-secundary">
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

	const DarkModeToggle = () => {
		if (!isMounted) return null;

		return (
			<button
				className={`h-full w-8 fill-current ${
					resolvedTheme === "dark"
						? "text-[rgba(255,255,255,0.8)] hover:text-white"
						: "text-[#333] hover:text-black"
				}`}
				onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
				{resolvedTheme === "dark" ? (
					<svg className="mx-auto h-5 w-5" viewBox="0 0 24 24">
						<path d="M6.995 12C6.995 14.761 9.241 17.007 12.002 17.007C14.763 17.007 17.009 14.761 17.009 12C17.009 9.239 14.763 6.993 12.002 6.993C9.241 6.993 6.995 9.239 6.995 12ZM11 19H13V22H11V19ZM11 2H13V5H11V2ZM2 11H5V13H2V11ZM19 11H22V13H19V11Z" />
						<path d="M5.63702 19.778L4.22302 18.364L6.34402 16.243L7.75802 17.657L5.63702 19.778Z" />
						<path d="M16.242 6.34405L18.364 4.22205L19.778 5.63605L17.656 7.75805L16.242 6.34405Z" />
						<path d="M6.34402 7.75902L4.22302 5.63702L5.63802 4.22302L7.75802 6.34502L6.34402 7.75902Z" />
						<path d="M19.778 18.3639L18.364 19.7779L16.242 17.6559L17.656 16.2419L19.778 18.3639Z" />
					</svg>
				) : (
					<svg className="mx-auto h-5 w-5" viewBox="0 0 24 24">
						<path d="M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z" />
					</svg>
				)}
			</button>
		);
	};

	return (
		<header className="border-b border-[#ddd] bg-meli-yellow text-[#333] antialiased dark:border-opacity-10 dark:bg-dark-secundary dark:text-dark-text">
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
								<span className="font-navigation text-[13px] leading-[18px] text-[#aaa] before:content-['\EA2A'] dark:text-white" />
							</div>
							<input
								className="h-8 w-full rounded-sm border-none pl-9 pt-[5px] pb-[7px] pr-3.5 outline-none placeholder:font-thin placeholder:text-black placeholder:text-opacity-25 focus:outline-offset-0 dark:bg-[#121212] dark:text-white dark:text-opacity-90 dark:placeholder:text-dark-text dark:placeholder:text-opacity-70 lg:h-10 lg:rounded-tr-none lg:rounded-br-none lg:pt-[7px] lg:pb-[9px] lg:pl-[15px] lg:placeholder:font-normal"
								placeholder={isDesktop ? "Buscar productos, marcas y más..." : "Estoy buscando..."}
								type="search"
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<button
								className="hidden w-[46px] items-center rounded-tr-sm rounded-br-sm bg-white pt-px dark:bg-[#121212] lg:flex"
								type="submit">
								<div className="h-[26px] w-full border-l border-[#e6e6e6] bg-white dark:border-dark-text dark:border-opacity-50 dark:bg-[#121212]">
									<span className="h-full font-navigation text-[#666] before:content-[''] dark:text-white" />
								</div>
							</button>
						</div>
					</form>
					<div className="mr-2.5 hidden items-center lg:flex">
						<svg className="mr-3 mb-1 h-[22px] w-[22px] fill-current" viewBox="0 0 16 16">
							<path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
						</svg>
						<p className="select-none text-[17px]">Envíos gratis en 24 hs a partir de $4.000</p>
					</div>
					<div className="flex h-12 w-[45px] flex-shrink-0 items-center justify-center lg:hidden">
						<span className="font-navigation text-lg leading-[50px] before:content-['\EA1F'] dark:text-white lg:text-base lg:leading-[27px]" />
					</div>
					<div className="flex h-12 flex-shrink-0 justify-center lg:hidden">
						<DarkModeToggle />
					</div>
					<div
						className="flex h-12 w-[45px] flex-shrink-0 cursor-pointer flex-col justify-center space-y-1.5 lg:hidden"
						onClick={toggleMenu}>
						<span
							className={`mx-auto block h-px w-5 bg-gray-800 transition-all dark:bg-white ${
								isMenuOpen ? "translate-y-2 rotate-45" : ""
							}`}
						/>
						<span
							className={`mx-auto block h-px w-5 bg-gray-800 transition-all dark:bg-white ${
								isMenuOpen ? "scale-0" : ""
							}`}
						/>
						<span
							className={`mx-auto block h-px w-5 bg-gray-800 transition-all dark:bg-white ${
								isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
							}`}
						/>
					</div>
				</div>
				{isMenuOpen ? (
					<HamburgerMenu />
				) : (
					<div className="flex items-center border-t border-black border-opacity-10 text-[#736c28] dark:border-[#ddd] dark:border-opacity-10 dark:text-dark-text lg:h-11 lg:items-start lg:border-none lg:pt-[5px] lg:text-[#333] dark:lg:text-dark-text">
						<span className="ml-3 mr-2 font-navigation text-base before:content-[''] lg:text-[23px] lg:before:content-['']" />
						<div className="flex-1 lg:flex lg:flex-initial lg:flex-col">
							<span className="text-[13px] leading-[38px] lg:text-xs lg:leading-none lg:text-black lg:text-opacity-50 dark:lg:text-dark-text dark:lg:text-opacity-100">
								Enviar a
							</span>
							<span className=" text-[13px] leading-[38px] lg:leading-none dark:lg:text-white">
								{" "}
								Capital Federal
							</span>
						</div>
						<div className="ml-[72px] hidden h-full flex-1 items-center text-sm leading-[22px] lg:flex">
							<ul className="flex space-x-5 [&>li]:cursor-pointer [&>li]:text-[#333] [&>li]:text-opacity-60 hover:[&>li]:text-opacity-90 dark:[&>li]:text-dark-text dark:hover:[&>li]:text-white">
								<li>Categorías</li>
								<li>Ofertas</li>
								<li>Historial</li>
								<li>Supermercado</li>
								<li>Vender</li>
								<li>Ayuda</li>
							</ul>
						</div>
						<div className="hidden h-full items-center text-sm lg:flex">
							<ul className="flex space-x-5 [&>li]:cursor-pointer [&>li]:text-[#333] hover:[&>li]:text-black dark:[&>li]:text-white dark:[&>li]:text-opacity-90 dark:hover:[&>li]:text-white">
								<li>Creá tu cuenta</li>
								<li>Ingresá</li>
								<li>Mis compras</li>
							</ul>
							<span className="ml-5 mr-3 cursor-pointer font-navigation text-base leading-[27px] before:content-['\EA1F'] hover:text-black dark:text-white dark:text-opacity-90 dark:hover:text-white" />
							<DarkModeToggle />
						</div>
						<span className="mx-4 h-2 w-2 -rotate-45 border-t-0 border-r-2 border-b-2 border-l-0 border-[#c1b74d] dark:border-dark-text lg:hidden" />
					</div>
				)}
			</div>
		</header>
	);
};

export default NavBar;
