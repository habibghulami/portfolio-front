import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Languages {
	name: string;
	Presant: number;
}

const LanguProgress = ({ name, Presant }: Languages) => {
	const [persant, setPersant] = useState<number>(0);

	useEffect(() => {
		let start = 0;

		const interval = setInterval(() => {
			start += 2;

			if (start > Presant) clearInterval(interval);
			else {
				setPersant(start);
			}
		}, 28);
		return () => {
			clearInterval(interval);
		};
	}, [Presant]);

	return (
		<div className="flex justify-center items-center flex-col space-y-3">
			<CircularProgressbar
				value={persant}
				text={`${persant}%`}
				className="w-full h-16 "
				styles={buildStyles({
					trailColor: "#191923",
					pathColor: "#ffc107",
					textColor: "#d1d5dc",
					textSize: "20px",
					pathTransitionDuration: 0.5,
					rotation: 0,
				})}
			/>

			<p className="flex justify-center items-center text-xs text-gray-100 tracking-wider">
				{name}
			</p>
		</div>
	);
};

export default LanguProgress;
