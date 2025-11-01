import Image from "next/image";
import React from "react";

type Brand = {
	title: string;
	img: string;
};

const Brands = () => {
	const Brands: Brand[] = [
		{
			title: "brand 1",
			img: "/img/brand-1.png",
		},
		{
			title: "brand 2",
			img: "/img/brand-2.png",
		},

		{
			title: "brand 3",
			img: "/img/brand-3.png",
		},
		{
			title: "brand 4",
			img: "/img/brand-1.png",
		},
	];

	return (
		<div className="w-full h-fit ">
			<div className="grid grid-cols-2 md:grid-cols-4">
				{Brands.map((Brand) => (
					<div
						key={Brand.title}
						className=" flex justify-center items-start gap-2 px-4  "
					>
						<Image
							src={Brand.img}
							alt={Brand.title}
							width={120}
							height={120}
							className="opacity-60 hover:opacity-100 duration-500 cursor-pointer"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Brands;
