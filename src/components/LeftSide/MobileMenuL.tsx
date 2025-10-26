"use client";

import HeroImg from "./HeroImg";
import Information from "./Information";
import Languages from "./Languages";
import Skills from "./Skills";
import Lists from "./Lists";
import CvButton from "./CvButton";
import Footer from "./Footer";

type LeftMenu = {
	OpenL: boolean;
	OnChangeL: React.Dispatch<React.SetStateAction<boolean>>;
	OnChangeImage: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobilMenu = ({ OpenL, OnChangeL, OnChangeImage }: LeftMenu) => {
	return (
		<>
			<aside
				onClick={() => OnChangeL(false)}
				className={`w-2xs min-h-screen absolute left-0 top-0 bg-[#20202a]  xl:hidden flex transition-normal duration-300 ease-in delay-75 z-20 ${
					OpenL ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<HeroImg OnChange={OnChangeImage} />

				<div className="w-full h-screen pt-64 overflow-y-auto scrool px-7">
					<Information />
					<Languages />
					<Skills />
					<Lists />
					<CvButton />
					<Footer />
				</div>
			</aside>
		</>
	);
};

export default MobilMenu;
