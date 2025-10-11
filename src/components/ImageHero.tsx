"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageHero = () => {
	const [OpenImg, setOpenImg] = useState<boolean>(false);

	return (
		<div className="flex justify-center items-center flex-col w-full h-full">
			<div
				className="w-fit h-fit relative rounded-full flex justify-center items-center cursor-pointer group"
				onClick={() => setOpenImg(true)}
			>
				<div className="absolute opacity-0 flex justify-center items-center group-hover:opacity-85 transition-opacity duration-500">
					🥇
				</div>
				<Image
					src="/img/Hero.jpg"
					width={100}
					height={100}
					alt="Hero"
					className="rounded-full size-22 ring-1 ring-[#ffc107]"
				/>
				<div className="size-[16px] rounded-full bg-[#ffc107] absolute bottom-1 right-1">
					<div className="size-[16px] rounded-full bg-[#ffc107] animate-ping absolute"></div>
				</div>
			</div>
			<div className=" w-full h-fit flex justify-center items-center flex-col mt-3">
				<h2 className="text-[14px] font-bold tracking-wider font-sans">
					Habib Ghulami
				</h2>
				<p className="text-[14px] tracking-normal text-[#8c8c8e]  mt-[10px]  font-sans">
					Front-End Developer
				</p>
				<p className="text-[14px] tracking-normal text-[#8c8c8e]  mt-1  font-sans">
					UI/UX Designer
				</p>
			</div>

			{OpenImg && (
				<div className="fixed top-0 left-0 opacity-100 bg-black w-full h-full flex justify-center items-center z-[999]">
					<div className="flex justify-center items-center relative w-[60%] h-[90%]  bg-[#17171f] rounded-lg z-[999]">
						<div
							className="flex justify-center items-center w-8 h-8 rounded-md cursor-pointer absolute top-2 right-2 bg-[#24242f] pb-1 "
							onClick={() => setOpenImg(false)}
						>
							×
						</div>
						<div className="bg-sky-50 w-[40%] h-[80%] fixed rounded-xl overflow-hidden">
							<Image src="/img/Hero.jpg" fill alt="Hero" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImageHero;
