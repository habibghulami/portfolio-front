import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

type One = {
	title: string;
	price: string;
	ui: string;
	web: string;
	logo: string;
	seo: string;
	word: string;
	btn: string;
	des: string;
};

type Two = {
	title: string;
	price: number;
	ui: string;
	web: string;
	logo: string;
	seo: string;
	word: string;
	btn: string;
	popular: string;
};

type three = {
	title: string;
	price: number;
	ui: string;
	web: string;
	logo: string;
	seo: string;
	word: string;
	btn: string;
};

const PricePlane = () => {
	const PlanOne: One[] = [
		{
			title: "Starter Price",
			price: " FREE",
			ui: "Ui Design",
			web: "Web Development",
			logo: "Logo design",
			seo: "SEO optimization",
			word: "WordPress integration",
			btn: "Order Now",
			des: "* Free only when ordering paid services",
		},
	];
	const PlanTwo: Two[] = [
		{
			title: "Hourly Payment",
			price: 29,
			ui: "Ui Design",
			web: "Web Development",
			logo: "Logo design",
			seo: "SEO optimization",
			word: "WordPress integration",
			btn: "Order Now",
			popular: "popular",
		},
	];
	const Planthree: three[] = [
		{
			title: "Full Time",
			price: 2999,
			ui: "Ui Design",
			web: "Web Development",
			logo: "Logo design",
			seo: "SEO optimization",
			word: "WordPress integration",
			btn: "Order Now",
		},
	];

	return (
		<div className="w-full h-fit py-6 ">
			<div className="flex justify-start items-center">
				<p className="font-bold text-xl px-[1px] ">Price Plans</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-5 md:gap-y-0 gap-y-6">
				{PlanOne.map((plan) => (
					<div
						key={plan.title}
						className="flex justify-center items-center flex-col gap-2 bg-[#2b2b36] pt-6 px-6 pb-2 "
					>
						<div className=" w-full h-fit flex justify-center items-center flex-col gap-y-6 mb-2">
							<h2 className="text-white font-semibold ">{plan.title}</h2>
							<p className="text-gray-300 font-extralight">
								${"  "}
								<span className="text-[32px] text-[#ffc107] font-bold px-1">
									{plan.price}
								</span>
								{"  "}
								hour
							</p>
						</div>

						<div className="flex justify-center items-center flex-col gap-y-3 text-[13px] font-mono tracking-wide font-medium text-gray-400 w-full h-fit mt-3 ">
							<p>{plan.ui}</p>
							<p>{plan.web}</p>
							<p>{plan.logo}</p>
							<p>{plan.seo}</p>
							<p>{plan.word}</p>
						</div>

						<span className="flex justify-between items-center w-fit h-fit text-[#ffc107] mt-6 group ">
							<button className="uppercase text-[14px] tracking-widest font-bold cursor-pointer">
								{plan.btn}
							</button>
							<BsArrowRightShort
								size={18}
								className="group-hover:translate-x-1 duration-300 ease-out"
							/>
						</span>

						<span className="w-full h-fit flex justify-center items-center ">
							<p className="text-[9px] text-gray-400 font-mono">{plan.des}</p>
						</span>
					</div>
				))}

				{/**/}

				{PlanTwo.map((PlanTwo) => (
					<div
						key={PlanTwo.title}
						className="flex justify-center items-center flex-col scale-[1.01] gap-2 bg-[#2b2b36] pt-6 px-6 pb-9 relative overflow-hidden"
					>
						<span className="absolute top-6 -right-6 bg-[#ffc107] px-8 py-[2px]  text-center uppercase text-[12px] text-black font-semibold rotate-45">
							{PlanTwo.popular}
						</span>

						<div className=" w-full h-fit flex justify-center items-center flex-col gap-y-6 mb-2">
							<h2 className="text-white font-semibold ">{PlanTwo.title}</h2>
							<p className="text-gray-300 font-extralight">
								${"  "}
								<span className="text-[32px] text-[#ffc107] font-bold px-1">
									{PlanTwo.price}
								</span>
								{"  "}
								hour
							</p>
						</div>

						<div className="flex justify-center items-center flex-col gap-y-3 text-[13px] font-mono tracking-wide font-medium text-gray-400 w-full h-fit mt-3 ">
							<p>{PlanTwo.ui}</p>
							<p>{PlanTwo.web}</p>
							<p>{PlanTwo.logo}</p>
							<p>{PlanTwo.seo}</p>
							<p>{PlanTwo.word}</p>
						</div>

						<span className="flex justify-between items-center w-fit h-fit text-[#ffc107] mt-6 group ">
							<button className="uppercase text-[14px] tracking-widest font-bold cursor-pointer">
								{PlanTwo.btn}
							</button>
							<BsArrowRightShort
								size={18}
								className="group-hover:translate-x-1 duration-300 ease-out"
							/>
						</span>
					</div>
				))}

				{Planthree.map((Planthree) => (
					<div
						key={Planthree.title}
						className="flex justify-center items-center flex-col  gap-2 bg-[#2b2b36] lg:mt-0 md:mt-6  pt-6 px-6 pb-9 relative overflow-hidden"
					>
						<div className=" w-full h-fit flex justify-center items-center flex-col gap-y-6 mb-2">
							<h2 className="text-white font-semibold ">{Planthree.title}</h2>
							<p className="text-gray-300 font-extralight">
								${"  "}
								<span className="text-[32px] text-[#ffc107] font-bold px-1">
									{Planthree.price}
								</span>
								{"  "}
								hour
							</p>
						</div>

						<div className="flex justify-center items-center flex-col gap-y-3 text-[13px] font-mono tracking-wide font-medium text-[#8c8a8e] w-full h-fit mt-3 ">
							<p>{Planthree.ui}</p>
							<p>{Planthree.web}</p>
							<p>{Planthree.logo}</p>
							<p>{Planthree.seo}</p>
							<p>{Planthree.word}</p>
						</div>

						<span className="flex justify-between items-center w-fit h-fit text-[#ffc107] mt-6 group ">
							<button className="uppercase text-[14px] tracking-widest font-bold cursor-pointer">
								{Planthree.btn}
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

export default PricePlane;
