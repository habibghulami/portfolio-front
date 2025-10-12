import React from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

interface Info {
	label: string;
}

const Info = () => {
	const information: Info[] = [
		{
			label: "Bootstrap, Materialize",
		},
		{
			label: "Stylus, Sass, Less",
		},
		{
			label: "Gulp, Webpack, Grunt",
		},
		{
			label: "GIT knowledge",
		},
	];

	return (
		<div className="w-full h-full flex justify-center items-start flex-col gap-y-3 border-b border-[#404048] py-6">
			{information.map(({ label }) => (
				<div
					key={label}
					className="flex justify-center items-center gap-x-3 text-[14px]"
				>
					<MdOutlineRadioButtonChecked size={13} className="text-[#ffc107] " />
					<p className="text-[#8c8c8e]">{label}</p>
				</div>
			))}
		</div>
	);
};

export default Info;
