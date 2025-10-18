import Container from "@/components/Container";
import LeftSide from "@/components/LeftSide/LeftSide";
import MainPage from "@/components/main/MainPage";
import RightSide from "@/components/RightSide/RightSide";

export default function Home() {
	return (
		<Container>
			<div className="w-full h-full relative bg-[#1e1e28] overflow-hidden">
				<div className=" w-full h-4 bg-[#191923] fixed top-0 left-0 z-10 lg:block hidden"></div>
				<LeftSide />
				<MainPage />
				<RightSide />
			</div>
		</Container>
	);
}
