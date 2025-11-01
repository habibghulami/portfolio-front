import { Menu, X } from "lucide-react";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import Experience from "./Experience";
import Cards from "./Cards";
import PricePlane from "./PricePlane";
import CardSlider from "./CardSlider";
import Brands from "./Brands";
import Footer from "./Footer";

type Props = {
	setOpenLeft: React.Dispatch<React.SetStateAction<boolean>>;
	openLeft: boolean;
	openRightH: boolean;
	openRight: boolean;
	setOpenRight: React.Dispatch<React.SetStateAction<boolean>>;
	openLeftH: boolean;
};

const Main = ({
	setOpenLeft,
	openLeft,
	openRightH,
	openRight,
	setOpenRight,
	openLeftH,
}: Props) => {
	return (
		<div className="w-full h-screen xl:pl-[288px] xl:pr-20 bg-[#1e1e28] ">
			{/* MOBILE LEFT */}
			<div className="w-full h-full overflow-y-auto scrool">
				<div
					onClick={() => setOpenLeft(!openLeft)}
					className={` w-fit h-fit flex xl:hidden justify-start fixed top-7 duration-300 delay-75 ease-in z-[999] ${
						openLeft ? "left-62" : "left-8"
					}   
				
				
				 ${
						openRightH
							? "opacity-0 pointer-events-none "
							: "opacity-100 pointer-events-auto"
					}
				`}
				>
					<CiMenuKebab
						size={18}
						className={`text-[#858588] hover:text-white transition-all cursor-pointer `}
					/>
				</div>

				{/* MOBILE RIGHT */}

				<div
					className={` w-fit h-fit flex xl:hidden justify-start fixed top-7 duration-500 delay-75 ease-linear z-[999] ${
						openRight ? "right-38" : "right-8"
					}
				
				
				 ${
						openLeftH
							? "opacity-0 pointer-events-none "
							: "opacity-100 pointer-events-auto"
					}

				`}
				>
					{openRight ? (
						<X
							onClick={() => setOpenRight(!openRight)}
							size={18}
							className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer"
						/>
					) : (
						<Menu
							onClick={() => setOpenRight(!openRight)}
							size={18}
							className="text-[#858588] hover:text-white transition-all duration-500 cursor-pointer "
						/>
					)}
				</div>

				<div className="bg-[#20202a] w-full h-18 flex xl:hidden fixed top-0 left-0 z-10"></div>
				<div className="w-full h-[480px] xl:h-[400px] bg-[url('/img/mountain.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
					<div className="w-full h-full bg-gradient-to-b from-[#1e1e28]/90 to-[#1e1e28] flex justify-center items-end xl:pt-2 pt-6">
						<div className=" h-[82%] w-[97%] xl:w-[93%] bg-[url('/img/mountain.jpg')] bg-cover bg-center bg-no-repeat xl:mb-3 ">
							<div className="w-full h-full bg-[#1e1e28]/50 relative flex justify-between items-center ">
								<div className="w-full h-full flex justify-center xl:justify-start items-center xl:pl-14 pl-0 px-3 ">
									<div className="h-full w-full xl:w-[70%] flex justify-center items-center xl:items-start flex-col pl-1 pb-2 gap-y-6">
										<h1 className="text-[44px] md:text-[48px] xl:text-[40px] text-white font-bold leading-14 lg:leading-12 wrap-break-word flex justify-center items-center xl:items-start flex-col  xl:text-start text-center">
											Discover my Amazing
											<span className=" ">Art Space!</span>
										</h1>
										<p className="font-semibold text-gray-200  wrap-normal text-[15px] md:text-[18px] xl:text-[16px] xl:text-start text-center xl:mb-0 mb-5 font-mono">
											&lt;<span className="text-[#ffc107]">code</span>&gt; I
											build
											<TypeAnimation
												sequence={[
													" ios and android applications.",
													2000,
													" web interfaces.",
													2000,
													" responsive designe.",
													2000,
													" wed applications.",
													2000,
												]}
												wrapper="span"
												speed={40}
												repeat={Infinity}
											/>
											&lt;/<span className="text-[#ffc107]">code</span>&gt;
										</p>
										<button className=" w-44 xl:w-[170px] xl:h-[45px] h-[45px] bg-[#ffc107] cursor-pointer flex justify-center items-center text-[12px] xl:text-xs tracking-widest text-black/70 font-bold duration-500 hover:-translate-y-[3px] ease-in-out  ">
											EXPLORE NOW
										</button>
									</div>
								</div>

								<div className="w-[75%] h-full bg-transparent xl:flex hidden bg-[url('/img/person.webp')] absolute -right-30 top-0 bg-cover bg-center bg-no-repeat"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full h-fit px-4 md:px-8 ">
					<div className="w-full h-fit ">
						<Experience />
					</div>
					<div className="w-full h-fit ">
						<Cards />
					</div>
					<div className="w-full h-fit ">
						<PricePlane />
					</div>
					<div className="w-full h-fit ">
						<CardSlider />
					</div>
					<div className="w-full h-fit ">
						<Brands />
					</div>
					<div className="w-full h-fit ">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
