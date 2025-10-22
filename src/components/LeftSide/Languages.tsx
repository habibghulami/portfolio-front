"use client";

import React from "react";
import LanguProgress from "./LanguProgress";

const Languages = () => {
	return (
		<div className="w-full h-fit flex justify-center items-center py-5 gap-x-3 border-b border-[#6b6b70]">
			<LanguProgress name={"Dari"} Presant={100} />
			<LanguProgress name={"English"} Presant={75} />
			<LanguProgress name={"Pashto"} Presant={50} />
		</div>
	);
};

export default Languages;
