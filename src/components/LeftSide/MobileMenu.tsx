"use client";

import React, { useState } from "react";
import HeroImg from "./HeroImg";
import Information from "./Information";
import Languages from "./Languages";
import Skills from "./Skills";
import Lists from "./Lists";
import CvButton from "./CvButton";
import Footer from "./Footer";
import { CiMenuKebab } from "react-icons/ci";

const MobilMenu = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<aside
				onClick={() => setOpen(false)}
				className={`w-2xs min-h-screen absolute left-0 top-0 bg-[#20202a] shadow-md shadow-[#191923] lg:hidden flex transition-normal duration-300 ease-in delay-75 ${
					open ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<HeroImg />

				<div className="w-full h-screen pt-64 overflow-y-auto scrool px-7">
					<Information />
					<Languages />
					<Skills />
					<Lists />
					<CvButton />
					<Footer />
				</div>
			</aside>

			<div
				onClick={() => setOpen(!open)}
				className={` w-fit h-fit flex lg:hidden justify-start absolute top-5 duration-300 delay-75 ease-in  ${
					open ? "left-64" : "left-4"
				}`}
			>
				<CiMenuKebab className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer" />
			</div>
		</>
	);
};

export default MobilMenu;
