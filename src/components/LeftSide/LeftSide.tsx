import React from "react";
import HeroImg from "./HeroImg";
import Information from "./Information";
import Languages from "./Languages";
import Skills from "./Skills";
import Lists from "./Lists";
import CvButton from "./CvButton";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

const LeftSide = () => {
	return (
		<>
			<aside className="w-2xs min-h-screen absolute left-0 top-0 bg-[#20202a] shadow-md shadow-[#191923] lg:flex hidden ">
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

			{/* MOBILE_MENU */}

			<MobileMenu />
		</>
	);
};

export default LeftSide;
