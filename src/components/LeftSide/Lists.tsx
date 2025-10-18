import { Disc } from "lucide-react";
import React from "react";

interface List {
	name: string;
}

const Lists = () => {
	const list: List[] = [
		{
			name: "Html , Css , TailwindCss",
		},
		{
			name: "JavaScript , TypeScript",
		},
		{
			name: "ReactJs , NextJs",
		},
		{
			name: "GIT & GITHUB Knowledge",
		},
	];

	return (
		<div className="w-full h-fit flex-col py-2 border-b border-[#6b6b70] ">
			{list.map(({ name }) => (
				<div
					key={name}
					className="w-full h-fit flex justify-start items-center gap-x-3 my-4"
				>
					<Disc size={12} className="text-[#ffc107] " />
					<p className="text-[13px] tracking-widest text-[#8b8b8d] font-semibold">
						{name}
					</p>
				</div>
			))}
		</div>
	);
};

export default Lists;
