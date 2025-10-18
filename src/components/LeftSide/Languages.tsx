"use client";

import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Languages {
	name: string;
	Presant: number;
}

const Languages = () => {
	const Languages: Languages[] = [
		{
			name: "Dari",
			Presant: 100,
		},
		{
			name: "English",
			Presant: 85,
		},
		{
			name: "Pashto",
			Presant: 70,
		},
	];

	return (
		<div className="w-full h-fit flex justify-center items-center py-5 gap-x-3 border-b border-[#6b6b70]">
			{Languages.map(({ name, Presant }) => (
				<div
					key={name}
					className="flex justify-center items-center flex-col space-y-3"
				>
					<CircularProgressbar
						value={Presant}
						text={`${Presant}%`}
						className="w-full h-16 "
						styles={buildStyles({
							trailColor: "#191923",
							pathColor: "#ffc107",
							textColor: "#d1d5dc",
							textSize: "20px",
							pathTransitionDuration: 0.5,
							strokeLinecap: "butt",
							rotation: 1,
						})}
					/>

					<p className="flex justify-center items-center text-xs text-gray-100 tracking-wider">
						{name}
					</p>
				</div>
			))}
		</div>
	);
};

export default Languages;
