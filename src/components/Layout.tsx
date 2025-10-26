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
import Main from "./main/Main";

const Layout = () => {
	const [openRight, setOpenRight] = useState<boolean>(false);
	const [openLeft, setOpenLeft] = useState<boolean>(false);
	const [imageopen, setImageOpen] = useState<boolean>(false);

	return (
		<div className="w-full h-full relative bg-transparent dark:bg-[#1e1e28] overflow-hidden">
			<div className=" w-full h-4 bg-white dark:bg-[#191923] fixed top-0 left-0 z-10 xl:block hidden"></div>

			{imageopen && (
				<div className="w-full h-screen bg-black/30 flex justify-center items-center fixed top-0 left-0 z-[9999]">
					<div className="max-w-3xl xl:mx-0 mx-10 xl:max-w-7xl max-h-80 bg-amber-800 rounded-lg overflow-hidden relative border-2 border-white">
						<XIcon
							onClick={() => setImageOpen(false)}
							className="absolute right-3 top-3 duration-300 cursor-pointer text-gray-300 hover:text-white "
						/>
						<Image src="/img/bike.avif" alt="Hero" width={500} height={500} />
					</div>
				</div>
			)}

			{/* LEFT SIDE */}

			<aside className="w-2xs min-h-screen absolute left-0 top-0 bg-white/50 dark:bg-[#20202a] xl:flex hidden ">
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
				OnChangeImage={setImageOpen}
			/>

			{/* Main */}

			<Main
				openLeft={openLeft}
				setOpenLeft={setOpenLeft}
				openRightH={openRight}
				openRight={openRight}
				setOpenRight={setOpenRight}
				openLeftH={openLeft}
			/>

			{/* RIGHT SIDE */}

			<aside
				className={`min-h-screen absolute right-0 top-0  bg-[#20202a] xl:flex hidden transition-normal duration-500 ease-linear delay-75 ${
					openRight ? "w-56" : "w-20"
				}`}
			>
				<div
					className={`absolute top-3 w-full h-20 shadow-md shadow-[#191923] flex items-center bg-[#252530]  `}
				>
					<div className=" w-full h-fit flex justify-start pl-7   ">
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

			<MobileMenu OpenR={openRight} OnChangeR={setOpenRight} />
		</div>
	);
};

export default Layout;
