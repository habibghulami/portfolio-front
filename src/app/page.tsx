import LeftSide from "@/components/left/Leftside/LeftSide";
import Container from "@/components/main/Container";

export default function Home() {
	return (
		<Container>
			<div className=" mx-auto w-full h-full flex flex-row relative">
				<LeftSide />
				<section className=" w-full min-h-screen pl-[290px] pr-[80px] ">
					<div className="lg:max-w-[900px] h-screen px-4"></div>
				</section>
				<aside className="bg-[#20202a] w-[80px] min-h-screen absolute right-0 top-0 ">
					rightside
				</aside>
			</div>
		</Container>
	);
}
