"use client";

import HeroImg from "./HeroImg";
import Information from "./Information";
import Languages from "./Languages";
import Skills from "./Skills";
import Lists from "./Lists";
import CvButton from "./CvButton";
import Footer from "./Footer";
import { CiMenuKebab } from "react-icons/ci";

type LeftMenu = {
	OpenL: boolean;
	OnChangeL: React.Dispatch<React.SetStateAction<boolean>>;
	Hidden: boolean;
	OnChangeImage: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobilMenu = ({ OpenL, OnChangeL, Hidden, OnChangeImage }: LeftMenu) => {
	return (
		<>
			<aside
				onClick={() => OnChangeL(false)}
				className={`w-2xs min-h-screen absolute left-0 top-0 bg-[#20202a] shadow-md shadow-[#191923] lg:hidden flex transition-normal duration-300 ease-in delay-75 ${
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

			<div
				onClick={() => OnChangeL(!OpenL)}
				className={` w-fit h-fit flex lg:hidden justify-start absolute top-5 duration-300 delay-75 ease-in  ${
					OpenL ? "left-64" : "left-4"
				}   
				
				
				 ${
						Hidden
							? "opacity-0 pointer-events-none "
							: "opacity-100 pointer-events-auto"
					}
				`}
			>
				<CiMenuKebab
					className={`text-[#858588] hover:text-white transition-all cursor-pointer `}
				/>
			</div>
		</>
	);
};

export default MobilMenu;
