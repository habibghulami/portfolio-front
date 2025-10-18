"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const RightSide: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);

	console.log(open);

	return (
		<>
			<aside
				className={`min-h-screen absolute right-0 top-0 shadow-md shadow-[#191923] bg-[#20202a] lg:flex hidden transition-normal duration-300 ease-in delay-75 ${
					open ? "w-52" : "w-20"
				}`}
			>
				<div
					className={`absolute top-3 w-full h-14 shadow-md shadow-[#191923] flex items-center bg-[#252530]  `}
				>
					<div className=" w-full h-fit flex justify-start pl-7  ">
						{open ? (
							<X
								onClick={() => setOpen(!open)}
								size={22}
								className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer"
							/>
						) : (
							<Menu
								onClick={() => setOpen(!open)}
								size={22}
								className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer "
							/>
						)}
					</div>
				</div>
			</aside>

			{/* MOBILE_MENU */}

			<MobileMenu />
		</>
	);
};

export default RightSide;
