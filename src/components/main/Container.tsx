import React from "react";

interface MyProps {
	children: React.ReactNode;
}

const Container = ({ children }: MyProps) => {
	return (
		<section className="w-full h-full bg-[#191923] px-[15px]">
			<div className="max-w-7xl min-h-screen mx-auto text-white overflow-hidden">
				<div className="absolute top-0 left-0 h-4 w-full z-[99999] bg-[#191923]"></div>
				{children}
				<div className="fixed bottom-0 left-0 h-4 w-full z-[999] bg-[#191923]"></div>
			</div>
		</section>
	);
};

//bg-[#1e1e28]
export default Container;
