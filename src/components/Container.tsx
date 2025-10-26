import React from "react";

interface IContainer {
	children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
	return (
		<div className="w-full min-h-screen bg-[#f0f0f6] dark:bg-[#191923] ">
			<section className="max-w-7xl h-screen mx-auto xl:px-4 px-0 relative">
				{children}
			</section>
		</div>
	);
};

export default Container;
