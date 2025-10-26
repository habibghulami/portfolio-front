"use client";

import React, { useEffect, useState } from "react";

type Progress = {
	name: string;
	progress: number;
};

const SkillsProgress = ({ name, progress }: Progress) => {
	const [progressnumber, setProgressNumber] = useState<number>(0);

	useEffect(() => {
		let start = 0;

		const interval = setInterval(() => {
			start += 1;

			if (start > progress) clearInterval(interval);
			else {
				setProgressNumber(start);
			}
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, [progress]);

	return (
		<div className="w-full h-fit flex justify-center items-center flex-col gap-y-2">
			<div className="flex justify-between items-center w-full h-3 text-sm mb-1">
				<p className="font-semibold tracking-wider">{name}</p>

				<p className="text-[13px] font-semibold text-gray-400">{`${progressnumber} %`}</p>
			</div>
			<div className="w-full h-[5px] bg-[#d1d5dc] dark:bg-[#191923]">
				<div
					className={` h-full bg-[#ffc107] ease-in-out`}
					style={{
						width: `${progressnumber}%`,
					}}
				></div>
			</div>
		</div>
	);
};

export default SkillsProgress;
