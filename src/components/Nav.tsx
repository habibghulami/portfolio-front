import React from "react";
import Toggle from "@/components/Toggle";

type IProp = {
	Value: boolean;
	OnChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ Value, OnChange }: IProp) => {
	const Nav = [
		{
			title: "home",
			path: "/",
		},
		{
			title: "services",
			path: "#services",
		},
		{
			title: "work",
			path: "#work",
		},
		{
			title: "resume",
			path: "#resume",
		},
		{
			title: "blogs",
			path: "#blogs",
		},
		{
			title: "contact",
			path: "#contact",
		},
	];

	return (
		<div className="w-full h-screen flex justify-center items-center px-4 flex-col">
			<div className="w-full h-fit gap-y-3 flex justify-center items-center flex-col pt-14 ">
				{Nav.map(({ path, title }, i) => {
					return (
						<a
							onClick={() => OnChange(false)}
							key={title}
							href={path}
							className={`w-full h-fit p-1 px-3 duration-500 rounded-md hover:bg-white/5 uppercase text-sm text-[#858588] hover:text-white  ${
								Value
									? "translate-x-0 opacity-100 pointer-events-auto"
									: "translate-x-8 opacity-0 pointer-events-none"
							}`}
							style={{
								transitionDelay: `${i * 60}ms`,
							}}
						>
							{title}
						</a>
					);
				})}
			</div>

			<div
				className={`w-full h-fit flex justify-center items-center pt-14 duration-500 delay-75  ${
					Value
						? "opacity-100 translate-y-0 pointer-events-auto"
						: "opacity-0 translate-y-44 pointer-events-none"
				}`}
			>
				<Toggle />
			</div>
		</div>
	);
};

export default Nav;
