import React from "react";
import SkillsProgress from "./SkillsProgress";

const Skills = () => {
	return (
		<div className="w-full h-fit flex justify-center items-center flex-col py-8 border-b border-[#6b6b70] gap-y-6 ">
			<SkillsProgress name="html" progress={95} />
			<SkillsProgress name="css" progress={90} />
			<SkillsProgress name="js" progress={70} />
			<SkillsProgress name="react js" progress={85} />
			<SkillsProgress name="next js" progress={80} />
		</div>
	);
};

export default Skills;
