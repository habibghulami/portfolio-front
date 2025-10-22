"use client";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

interface Skills {
	name: string;
	presant: number;
}

const Skills = () => {
	const Skills: Skills[] = [
		{
			name: "html",
			presant: 95,
		},
		{
			name: "css",
			presant: 90,
		},
		{
			name: "js",
			presant: 70,
		},
		{
			name: "react js",
			presant: 85,
		},
		{
			name: "next js",
			presant: 80,
		},
	];

	return (
		<div className="w-full h-fit flex justify-center items-center flex-col py-8 border-b border-[#6b6b70] gap-y-6 ">
			{Skills.map(({ name, presant }) => (
				<div
					key={name}
					className="w-full h-fit flex justify-center items-center flex-col gap-y-2"
				>
					<div className="flex justify-between items-center w-full h-3 text-sm mb-1">
						<p className="font-semibold tracking-wider">{name}</p>

						<p className="text-[13px] font-semibold text-gray-400">{`${presant} %`}</p>
					</div>
					<ProgressBar
						completed={presant}
						animateOnRender={true}
						transitionDuration="2s"
						baseBgColor="#191923"
						bgColor="#ffc107"
						isLabelVisible={false}
						height="4px"
						className="w-full"
						borderRadius=""
					/>
				</div>
			))}
		</div>
	);
};

export default Skills;
