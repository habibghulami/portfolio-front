import React from "react";

const Experience = () => {
	return (
		<div className="w-full h-fit flex justify-center items-center py-4 ">
			<div className="grid grid-cols-2 md:grid-cols-4 w-full h-fit gap-10 pt-2">
				<div className="flex justify-start items-center gap-2 ">
					<span className="flex justify-center items-center text-[#ffc107] text-[22px] font-bold">
						10<span className="pb-1 pl-1">+</span>
					</span>
					<p className="text-[13px]">Years Experience</p>
				</div>
				<div className="flex justify-start items-center gap-3">
					<span className="flex justify-center items-center text-[#ffc107] text-[22px] font-bold">
						143
					</span>
					<p className="text-[13px]">Completed Projects</p>
				</div>
				<div className="flex justify-start items-center gap-3">
					<span className="flex justify-center items-center text-[#ffc107] text-[22px] font-bold">
						114
					</span>
					<p className="text-[13px]">Happy Customers</p>
				</div>
				<div className="flex justify-start items-center gap-3">
					<span className="flex justify-center items-center text-[#ffc107] text-[22px] font-bold">
						20 <span className="pb-1 pl-1">+</span>
					</span>
					<p className="text-[13px]">Honors and Awards</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
