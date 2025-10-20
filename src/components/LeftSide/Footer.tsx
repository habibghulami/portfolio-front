import React from "react";
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="w-full h-fit py-4 opacity-97 bg-white dark:bg-[#252530] absolute bottom-0 left-0 flex justify-center items-center space-x-3 ">
			<FaLinkedinIn className="text-sm text-[#8b8b8d] hover:text-white duration-300" />
			<FaGithub className="text-sm text-[#8b8b8d] hover:text-white duration-300" />
			<FaXTwitter className="text-sm text-[#8b8b8d] hover:text-white duration-300" />
			<FaInstagram className="text-sm text-[#8b8b8d] hover:text-white duration-300" />
		</div>
	);
};

export default Footer;
