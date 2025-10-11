import Container from "@/components/Container";
import ImageHero from "@/components/ImageHero";

export default function Home() {
	return (
		<Container>
			<div className=" mx-auto w-full h-full flex flex-row relative ">
				<aside className="bg-[#20202a] w-[290px] min-h-screen fixed top-0 ">
					<div className="w-full h-screen relative ">
						<div className="  bg-[#24242f] w-full h-60 opacity-99 p-4 absolute top-0 left-0 mt-3">
							<ImageHero />
						</div>
						<div className="w-full h-full px-8 pt-63 overflow-y-scroll scrool">
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
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
						{/* <div className="w-full h-12 absolute bottom-0 left-0 bg-[#24242f] mb-4 opacity-99 z"></div> */}
					</div>
				</aside>
				<section className=" w-full min-h-screen pl-[290px] pr-[80px] ">
					<div className="max-w-[900px] h-screen px-4">
						<hr />
					</div>
				</section>
				<aside className="bg-[#20202a] w-[80px] min-h-screen absolute right-0 top-0">
					rightside
				</aside>
			</div>
		</Container>
	);
}
