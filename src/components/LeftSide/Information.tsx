import React from "react";

const Information = () => {
	return (
		<div className="w-full h-fit py-6 border-b border-[#6b6b70] flex justify-between items-center px-1">
			<div className="flex justify-center items-start flex-col gap-2 font-mono text-[14px]">
				<p>Residence:</p>
				<p>City:</p>
				<p>Age:</p>
			</div>
			<div className="flex justify-center items-end flex-col text-[#8b8b8d] gap-2 font-mono text-[14px] ">
				<p>Afghanistan</p>
				<p>Kabul</p>
				<p>20</p>
			</div>
		</div>
	);
};

export default Information;
