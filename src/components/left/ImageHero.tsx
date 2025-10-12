"use client";

import { Maximize, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import bike from "../../../public/img/bike.avif";

const ImageHero = () => {
	const [OpenImg, setOpenImg] = useState<boolean>(false);

	return (
		<div className="flex justify-center items-center flex-col w-full h-full ">
			<div
				className="w-fit h-fit relative rounded-full flex justify-center items-center cursor-pointer group duration-500"
				onClick={() => setOpenImg(true)}
			>
				<div className="absolute opacity-0 flex justify-center items-center group-hover:opacity-85 transition-opacity duration-500">
					<Maximize size={30} />
				</div>
				<Image
					src={bike}
					width={100}
					height={100}
					alt="Hero"
					className="rounded-full w-[88px] h-[85px] ring-1 ring-[#ffc107]"
				/>
				<div className="size-[16px] rounded-full bg-[#ffc107] absolute bottom-1 right-1">
					<div className="size-[16px] rounded-full bg-[#ffc107] animate-ping absolute"></div>
				</div>
			</div>
			<div className=" w-full h-fit flex justify-center items-center flex-col mt-3">
				<Link
					href="/"
					className="text-[14px] font-bold tracking-wider font-sans hover:text-[#ffc107] duration-300 "
				>
					Habib Ghulami
				</Link>
				<p className="text-[14px] tracking-normal text-[#8c8c8e]  mt-[10px]  font-sans">
					Front-End Developer
				</p>
				<p className="text-[14px] tracking-normal text-[#8c8c8e]  mt-1  font-sans">
					UI/UX Designer
				</p>
			</div>

			{OpenImg && (
				<div
					className="absolute top-0 left-0 bg-black/90 w-7xl h-screen flex justify-center items-center "
					onClick={() => setOpenImg(false)}
				>
					<div className="flex justify-center items-center relative w-xl h-[400px] bg-[#17171f]/20 rounded-lg overflow-hidden hover:ring-1 ring-white duration-300 ">
						<div
							className="flex justify-center items-center w-10 h-8 rounded-md cursor-pointer absolute top-2 right-2 py-1 z-50 hover:text-[#ffc107] duration-300 border-[1px]"
							onClick={() => setOpenImg(false)}
						>
							<X size={20} />
						</div>
						<div className=" w-full h-full ">
							<Image src={bike} fill alt="Hero" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImageHero;
