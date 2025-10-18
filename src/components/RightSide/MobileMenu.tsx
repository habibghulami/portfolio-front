import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<aside
				onClick={() => setOpen(false)}
				className={`min-h-screen absolute right-0 top-0 shadow-md shadow-[#191923] bg-[#20202a] lg:hidden flex transition-normal duration-300 ease-in delay-75 ${
					open ? "w-52" : "w-0"
				}`}
			>
				<div
					className={`absolute top-0 w-full h-14 shadow-md shadow-[#191923] flex items-center bg-[#252530]  `}
				></div>
			</aside>

			<div
				className={` w-fit h-fit flex lg:hidden justify-start absolute top-6 duration-300 delay-75 ease-in ${
					open ? "right-44" : "right-4"
				}`}
			>
				{open ? (
					<X
						onClick={() => setOpen(!open)}
						size={18}
						className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer"
					/>
				) : (
					<Menu
						onClick={() => setOpen(!open)}
						size={16}
						className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer "
					/>
				)}
			</div>
		</>
	);
};

export default MobileMenu;
