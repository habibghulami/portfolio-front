import { DownloadIcon } from "lucide-react";
import React from "react";

const CvButton = () => {
	return (
		<div className="w-full h-fit py-5 flex justify-start items-center mb-11  ">
			<a
				href=""
				target="_blank"
				className="text-xs text-[#8b8b8d] hover:text-gray-100 font-bold tracking-widest flex duration-300"
			>
				DOWNLOAD CV
				<DownloadIcon size={15} className="ml-1" />
			</a>
		</div>
	);
};

export default CvButton;
