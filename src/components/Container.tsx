import React from "react";

interface IContainer {
	children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
	return (
		<div className="w-full min-h-screen bg-white dark:bg-[#191923] ">
			<section className="max-w-7xl min-h-screen mx-auto lg:px-4 px-0 ">
				{children}
			</section>
		</div>
	);
};

export default Container;
