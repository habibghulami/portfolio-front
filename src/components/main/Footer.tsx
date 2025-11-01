import React from "react";

const Footer = () => {
	return (
		<div className="w-full h-fit py-4 px-4 my-4 flex md:justify-between items-center justify-center md:flex-row flex-col bg-[#2c2c37] md:gap-y-0 gap-y-2  ">
			<p className="text-xs font-semibold text-[#8c8a8e]">
				&copy; 2025 All Rights Reserved.{" "}
			</p>
			<a
				href="mailto:habibghulami558@gmail.com"
				className="text-xs font-semibold text-[#8c8a8e] hover:text-white duration-300"
			>
				Email: admin@bslthemes.com
			</a>
		</div>
	);
};

export default Footer;
