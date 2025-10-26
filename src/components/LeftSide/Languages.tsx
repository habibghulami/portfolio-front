"use client";

import React from "react";
import LanguProgress from "./LanguProgress";

const Languages = () => {
	return (
		<div className="w-full h-fit flex justify-center items-center py-5 gap-x-3 border-b border-[#6b6b70]">
			<LanguProgress name={"Dari"} progress={100} />
			<LanguProgress name={"English"} progress={75} />
			<LanguProgress name={"Pashto"} progress={50} />
		</div>
	);
};

export default Languages;
