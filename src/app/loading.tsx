"use client";

import React from "react";

const loading = () => {
	return (
		<div className="w-full h-screen bg-black text-white flex justify-center items-center">
			<div className="loader">
				<div className="circle">
					<div className="dot"></div>
					<div className="outline"></div>
				</div>
				<div className="circle">
					<div className="dot"></div>
					<div className="outline"></div>
				</div>
				<div className="circle">
					<div className="dot"></div>
					<div className="outline"></div>
				</div>
				<div className="circle">
					<div className="dot"></div>
					<div className="outline"></div>
				</div>
			</div>
		</div>
	);
};

export default loading;
