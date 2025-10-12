"use client";

import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

interface Langu {
	label: string;
	count: number;
}

const Langu: React.FC = () => {
	const Languages: Langu[] = [
		{
			label: "Html",
			count: 90,
		},
		{
			label: "CSS",
			count: 95,
		},
		{
			label: "Js",
			count: 75,
		},
		{
			label: "React Js",
			count: 85,
		},
		{
			label: "Next Js",
			count: 70,
		},
	];

	return (
		<div className="flex flex-col justify-center items-center border-b border-[#404048] py-7 gap-y-5 ">
			{Languages.map(({ label, count }) => (
				<div key={label} className="w-full h-fit">
					<div className="w-full flex justify-between items-center mb-2 px-[3px] ">
						<p className="text-[14px]">{label}</p>
						<p className="text-[#d1d5dc] text-[14px]">{`${count}%`}</p>
					</div>
					<ProgressBar
						completed={count}
						animateOnRender={true}
						height="4.5px"
						isLabelVisible={false}
						bgColor={`#ffc107`}
						baseBgColor={"#191923"}
						className="duration-500 "
					></ProgressBar>
				</div>
			))}
		</div>
	);
};

export default Langu;
