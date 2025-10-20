import { Menu, X } from "lucide-react";
import Nav from "../Nav";

type RightMenu = {
	OpenR: boolean;
	OnChangeR: React.Dispatch<React.SetStateAction<boolean>>;
	Hidden: boolean;
};

const MobileMenu = ({ OpenR, OnChangeR, Hidden }: RightMenu) => {
	return (
		<>
			<aside
				onClick={() => OnChangeR(false)}
				className={`min-h-screen absolute right-0 top-0 shadow-md shadow-[#191923] bg-[#20202a] lg:hidden flex transition-normal duration-500 ease-linear delay-75 ${
					OpenR ? "w-48" : "w-0"
				}`}
			>
				<div
					className={`absolute top-0 w-full h-14 shadow-md shadow-[#191923] flex items-center bg-[#252530]  `}
				></div>
				{/*Mobile */}

				<Nav Value={OpenR} OnChange={OnChangeR} />
			</aside>

			<div
				className={` w-fit h-fit flex lg:hidden justify-start absolute top-5 duration-300 delay-75 ease-linear ${
					OpenR ? "right-40" : "right-4"
				}
				
				
				 ${
						Hidden
							? "opacity-0 pointer-events-none "
							: "opacity-100 pointer-events-auto"
					}

				`}
			>
				{OpenR ? (
					<X
						onClick={() => OnChangeR(!OpenR)}
						size={18}
						className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer"
					/>
				) : (
					<Menu
						onClick={() => OnChangeR(!OpenR)}
						size={16}
						className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer "
					/>
				)}
			</div>
		</>
	);
};

export default MobileMenu;
