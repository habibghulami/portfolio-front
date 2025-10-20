"use client";

import React, { useState } from "react";
import HeroImg from "./LeftSide/HeroImg";
import Information from "./LeftSide/Information";
import Skills from "./LeftSide/Skills";
import Lists from "./LeftSide/Lists";
import CvButton from "./LeftSide/CvButton";
import Footer from "./LeftSide/Footer";
import Languages from "./LeftSide/Languages";
import MobilMenu from "./LeftSide/MobileMenuL";
import Nav from "./Nav";
import { Menu, X, XIcon } from "lucide-react";
import MobileMenu from "./RightSide/MobileMenuR";
import Image from "next/image";

const Layout = () => {
	const [openRight, setOpenRight] = useState<boolean>(false);
	const [openLeft, setOpenLeft] = useState<boolean>(false);
	const [imageopen, setImageOpen] = useState<boolean>(false);

	return (
		<div className="w-full h-full relative bg-[#f0f0f6] dark:bg-[#1e1e28] overflow-hidden">
			<div className=" w-full h-4 bg-gray-50 dark:bg-[#191923] fixed top-0 left-0 z-10 lg:block hidden"></div>

			{imageopen && (
				<div className="w-full h-screen bg-black/30 flex justify-center items-center fixed top-0 left-0 z-[9999]">
					<div className="max-w-3xl md:mx-0 mx-10 md:max-w-7xl max-h-80 bg-amber-800 rounded-lg overflow-hidden relative border-2 border-white">
						<XIcon
							onClick={() => setImageOpen(false)}
							className="absolute right-3 top-3 duration-300 cursor-pointer text-gray-300 hover:text-white "
						/>
						<Image src="/img/bike.avif" alt="Hero" width={500} height={500} />
					</div>
				</div>
			)}

			{/* LEFT SIDE */}

			<aside className="w-2xs min-h-screen absolute left-0 top-0 bg-[] dark:bg-[#20202a] shadow-md shadow-[#191923] lg:flex hidden ">
				<HeroImg OnChange={setImageOpen} />

				<div className="w-full h-screen pt-64 overflow-y-auto scrool px-7">
					<Information />
					<Languages />
					<Skills />
					<Lists />
					<CvButton />
					<Footer />
				</div>
			</aside>

			{/* MOBILE_MENU_LEFT */}

			<MobilMenu
				OpenL={openLeft}
				OnChangeL={setOpenLeft}
				Hidden={openRight}
				OnChangeImage={setImageOpen}
			/>

			{/* Main */}

			<div className="w-full min-h-screen lg:pl-[290px] lg:pr-20 ">
				<div className="bg-[#20202a] w-full h-14 flex lg:hidden"></div>
				<div className="w-full h-screen "></div>
			</div>

			{/* RIGHT SIDE */}

			<aside
				className={`min-h-screen absolute right-0 top-0 shadow-md shadow-[#191923] bg-[#20202a] lg:flex hidden transition-normal duration-500 ease-linear delay-75 ${
					openRight ? "w-56" : "w-20"
				}`}
			>
				<div
					className={`absolute top-3 w-full h-20 shadow-md shadow-[#191923] flex items-center bg-[#252530]  `}
				>
					<div className=" w-full h-fit flex justify-start pl-7  ">
						{openRight ? (
							<X
								onClick={() => setOpenRight(!openRight)}
								size={22}
								className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer"
							/>
						) : (
							<Menu
								onClick={() => setOpenRight(!openRight)}
								size={22}
								className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer "
							/>
						)}
					</div>
				</div>

				<Nav Value={openRight} OnChange={setOpenRight} />
			</aside>

			{/* MOBILE_MENU_RIGHT*/}

			<MobileMenu
				OpenR={openRight}
				OnChangeR={setOpenRight}
				Hidden={openLeft}
			/>
		</div>
	);
};

export default Layout;
