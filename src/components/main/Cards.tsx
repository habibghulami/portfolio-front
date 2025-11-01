import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

type Cards = {
	title: string;
	describe: string;
	btn: string;
};

const Cards = () => {
	const Cards: Cards[] = [
		{
			title: "Web Development",
			describe:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",

			btn: "Order now",
		},
		{
			title: "UI/UX Design",
			describe:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",

			btn: "Order now",
		},
		{
			title: "Sound Design",
			describe:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",

			btn: "Order now",
		},
		{
			title: "Game Design",
			describe:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",

			btn: "Order now",
		},
		{
			title: "Video Editing",
			describe:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",

			btn: "Order now",
		},
		{
			title: "Photography",
			describe:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
			btn: "Order now",
		},
	];

	return (
		<div className="w-full h-fit py-6 ">
			<div className="flex justify-start items-center">
				<p className="font-bold text-xl pl-[1px]">My Service</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
				{Cards.map((card) => (
					<div
						key={card.title}
						className="flex justify-center items-start flex-col gap-2 bg-[#2b2b36] p-6 "
					>
						<h2 className=" font-bold font-mono tracking-wider mb-2">
							{card.title}
						</h2>
						<p className=" tracking-wider text-[13px] leading-6 text-[#8c8a8e]">
							{card.describe}
						</p>
						<span className="flex justify-between items-center w-fit h-fit text-[#ffc107] mt-2 group ">
							<button className="uppercase text-[12px] tracking-widest font-bold cursor-pointer">
								{card.btn}
							</button>
							<BsArrowRightShort
								size={18}
								className="group-hover:translate-x-1 duration-300 ease-out"
							/>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cards;
