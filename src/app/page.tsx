import CircleProgrees from "@/components/left/CircleProgrees";
import Container from "@/components/left/Container";
import Footer from "@/components/left/Footer";
import ImageHero from "@/components/left/ImageHero";
import Info from "@/components/left/Info";
import Langu from "@/components/left/Langu";
import { Download } from "lucide-react";

export default function Home() {
	return (
		<Container>
			<div className=" mx-auto w-full h-full flex flex-row relative ">
				<aside className="bg-[#20202a] w-[290px] min-h-screen fixed top-0 z-[999]">
					<div className="w-full h-screen relative ">
						<div className="  bg-[#24242f] w-full h-60 opacity-99 p-4 absolute top-0 left-0 mt-3 z-[999]">
							<ImageHero />
						</div>
						<div className="w-full h-full px-7 pt-63 overflow-y-scroll scrool">
							<div className="w-full h-fit">
								<div className=" flex justify-between items-center border-b border-[#404048] py-5">
									<div className="  flex flex-col justify-center items-start text-[14px] font-sans gap-y-1 -tracking-tigh text-balance ">
										<p>Residence:</p>
										<p>City:</p>
										<p>Age:</p>
									</div>
									<div className="flex items-end justify-center flex-col text-[14px] font-sans gap-y-1 text-[#8c8c81] -tracking-tigh text-balance">
										<p>Afghanistan</p>
										<p>Kabul</p>
										<p>20</p>
									</div>
								</div>
							</div>
							<div className="w-full h-fit">
								<CircleProgrees />
							</div>
							<div className="w-full h-fit ">
								<Langu />
							</div>
							<div className="w-full h-fit">
								<Info />
							</div>
							<div className="w-full h-fit py-4 pb-20 flex justify-start items-center gap-1 text-[#8c8c8e]">
								<div className="flex justify-center items-center gap-1 hover:text-white duration-500 ml-0.5">
									<a
										href="#"
										target="_blank"
										className="uppercase text-[12px] tracking-widest font-bold cursor-pointer "
									>
										download cv
									</a>
									<Download size={14} />
								</div>
							</div>
						</div>
						<div className="w-full h-16 sticky bottom-0 left-0 bg-[#24242f] opacity-99 pb-3 ">
							<Footer />
						</div>
					</div>
				</aside>
				<section className=" w-full min-h-screen pl-[290px] pr-[80px] ">
					<div className="max-w-[900px] h-screen px-4"></div>
				</section>
				<aside className="bg-[#20202a] w-[80px] min-h-screen absolute right-0 top-0 ">
					rightside
				</aside>
			</div>
		</Container>
	);
}
