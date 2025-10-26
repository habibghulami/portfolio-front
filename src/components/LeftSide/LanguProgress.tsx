"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface Languages {
	name: string;
	progress: number;
}

const LanguProgress = ({ name, progress }: Languages) => {
	const { theme } = useTheme();
	const [persant, setPersant] = useState<number>(0);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		let start = 0;

		const interval = setInterval(() => {
			start += 1;

			if (start > progress) clearInterval(interval);
			else {
				setPersant(start);
			}
		}, 15);
		return () => {
			clearInterval(interval);
		};
	}, [progress]);

	if (!mounted) return null;

	const darkbg = "#191923";
	const lightbg = "#d1d5dc";

	const bgdark = theme === "dark" ? darkbg : lightbg;

	const circleStyle = {
		background: `conic-gradient(#ffc107 ${persant * 3.6}deg, ${bgdark} ${
			persant * 3.6
		}deg)`,
	};

	return (
		<div className="flex justify-center items-center flex-col space-y-3">
			<div
				className="w-14 h-14 relative rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-0"
				style={circleStyle}
			>
				<div className="w-[47px] h-[47px] absolute rounded-full flex items-center justify-center bg-white dark:bg-[#20202a]">
					<span className="text-[12px] text-gray-400 font-semibold">{`${persant}%`}</span>
				</div>
			</div>
			<div className="text-[13px] font-semibold">{name}</div>
		</div>
	);
};

export default LanguProgress;
