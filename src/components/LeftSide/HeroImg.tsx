import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroImg = () => {
	return (
		<div className="w-full h-64 bg-[#252530] absolute top-0 left-0 opacity-98">
			<div className="w-full h-fit flex justify-center items-center flex-col gap-4 pt-11">
				<div className="w-fit h-fit flex justify-center items-center relative rounded-full">
					<Image
						src="/img/bike.avif"
						width={300}
						height={300}
						alt="Hero"
						className="size-24 rounded-full "
					/>
					<div className="group w-fit h-fit ">
						<div className=" size-3.5 rounded-full bg-[#ffc107] absolute bottom-2 right-1.5 cursor-pointer ">
							<div className="size-3.5 rounded-full bg-[#ffc107] animate-ping "></div>
						</div>
						<div
							className=" absolute top-16 bg-gray-400/30 w-24 h-fit text-white/75 text-[10px] tracking-wide pl-1 translate-x-20
							opacity-0 group-hover:translate-x-4 group-hover:opacity-80 duration-500 pointer-events-none"
						>
							I am available for freelance hire
						</div>
						<div className="absolute top-26 bg-black/30 w-34 h-fit text-white/75 text-[10px] tracking-tight py-1 pl-1 opacity-0  translate-x-5 group-hover:opacity-80 group-hover:translate-x-0 duration-500 -mt-2.5 pointer-events-none">
							i am available for freelance hire
						</div>
					</div>
				</div>

				<div className="flex justify-center items-center flex-col gap-3">
					<Link
						href="/"
						className="font-bold text-[13px] hover:text-[#ffc107] duration-500"
					>
						HABIB GHULAMI
					</Link>
					<div className="flex justify-center items-center flex-col gap-1">
						<p className="text-[#8b8b8d] text-sm">Front-End Developer</p>
						<p className="text-[#8b8b8d] text-sm">Ui/Ux designer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;
