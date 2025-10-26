import Nav from "../Nav";

type RightMenu = {
	OpenR: boolean;
	OnChangeR: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ OpenR, OnChangeR }: RightMenu) => {
	return (
		<>
			<aside
				onClick={() => OnChangeR(false)}
				className={`min-h-screen absolute right-0 top-0 bg-[#20202a] xl:hidden flex transition-normal duration-500 ease-linear delay-75 z-50 ${
					OpenR ? "w-48" : "w-0"
				}`}
			>
				<div className="absolute top-0 w-full h-18 flex items-center bg-[#252530]  "></div>
				{/*Mobile */}

				<Nav Value={OpenR} OnChange={OnChangeR} />
			</aside>
		</>
	);
};

export default MobileMenu;
