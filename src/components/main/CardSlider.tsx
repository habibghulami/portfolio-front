"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

type Cards = {
	title: string;
	shortdes: string;
	description: string;
	image: string;
};

const cards: Cards[] = [
	{
		title: "Paul Trueman",
		shortdes: "Backend Developer",
		description:
			" Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
		image: "/img/person1.jpg",
	},
	{
		title: "Sarah Lee",
		shortdes: "Designer",
		description:
			"Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
		image: "/img/person2.jpg",
	},
	{
		title: "john doe",
		shortdes: "Template author",
		description:
			"Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
		image: "/img/person3.jpg",
	},
	{
		title: "john smith",
		shortdes: "Frontend Developer",
		description:
			"Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer..",
		image: "/img/person4.jpg",
	},
];

const CardSlider = () => {
	const swiperRef = useRef<any>(null);

	return (
		<div className="w-full h-fit pt-6  relative">
			{/* Title */}
			<div className="flex justify-start items-center mb-8">
				<p className="font-bold text-xl px-[1px] ">Recommendations</p>
			</div>

			{/* Swiper */}
			<Swiper
				modules={[Navigation, Pagination]}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				spaceBetween={20}
				slidesPerView={1}
				loop={false}
				breakpoints={{
					640: { slidesPerView: 1 },
					1024: { slidesPerView: 2 },
				}}
				className="pb-10 grid md:grid-cols-2 grid-cols-1 z-10"
				pagination={{
					type: "bullets",
				}}
				unselectable="on"
			>
				{cards.map((card, index) => (
					<SwiperSlide
						key={index}
						className="flex justify-center items-center  relative"
					>
						<div className="bg-[#2b2b36] text-white p-8 ">
							<Image
								width={300}
								height={300}
								src={card.image}
								alt={card.title}
								className="rounded-full object-cover size-16 absolute right-8 top-3 z-50"
							/>

							<div className="mb-6 ">
								<h3 className="text-sm font-semibold ">{card.title}</h3>
								<h4 className="font-medium text-gray-500 font-mono text-sm tracking-wide ">
									{card.shortdes}
								</h4>
							</div>
							<p className="text-[#8c8a8e] text-sm mb-4 mt-2">
								{card.description}
							</p>
							<span className="w-fit h-fit flex justify-center items-center gap-x-1 text-yellow-500 rounded-full mt-6 px-4 py-[7px] bg-[#191923]">
								<BsStarFill size={11} />
								<BsStarFill size={11} />
								<BsStarFill size={11} />
								<BsStarFill size={11} />
								<BsStarFill size={11} />
							</span>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className=" w-full flex justify-end items-center py-4 z-10 gap-x-4 px-2">
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className="text-gray-500 hover:text-white duration-300 cursor-pointer"
				>
					<ArrowLeft size={18} />
				</button>

				<button
					onClick={() => swiperRef.current?.slideNext()}
					className="text-gray-500 hover:text-white duration-300 cursor-pointer"
				>
					<ArrowRight size={18} />
				</button>
			</div>
		</div>
	);
};

export default CardSlider;
