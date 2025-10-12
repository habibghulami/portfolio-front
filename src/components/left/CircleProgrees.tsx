"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Circle {
	name: string;
	percentage: number;
}

const CircleProgress: React.FC = () => {
	const circles: Circle[] = [
		{ name: "Dari", percentage: 100 },
		{ name: "English", percentage: 80 },
		{ name: "Pashto", percentage: 60 },
	];

	return (
		<div className="flex justify-between items-center border-b border-[#404048] py-8 px-1">
			{circles.map(({ name, percentage }) => (
				<div className="flex flex-col items-center mx-2" key={name}>
					<div className="size-14">
						<CircularProgressbar
							value={percentage}
							text={`${percentage}%`}
							styles={buildStyles({
								textColor: "#d1d5dc",
								pathColor: "#ffc107",
								trailColor: "#191923",
								textSize: "24px",
							})}
						/>
					</div>
					<p className="text-white text-sm mt-3 capitalize">{name}</p>
				</div>
			))}
		</div>
	);
};

export default CircleProgress;
