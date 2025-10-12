import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
	return (
		<div className="w-full h-full flex justify-center items-center gap-x-4 ">
			<a href="/" target="_blank">
				<FaXTwitter
					size={17}
					className="text-[#8c8c8e] hover:text-white duration-200"
				/>
			</a>
			<a href="/" target="_blank">
				<FaGithub
					size={17}
					className="text-[#8c8c8e] hover:text-white duration-200"
				/>
			</a>
			<a href="/" target="_blank">
				<FaLinkedin
					size={17}
					className="text-[#8c8c8e] hover:text-white duration-200"
				/>
			</a>
			<a href="/" target="_blank">
				<FaInstagram
					size={17}
					className="text-[#8c8c8e] hover:text-white duration-200"
				/>
			</a>
		</div>
	);
};

export default Footer;
