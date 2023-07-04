import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
	const projects = [1, 2, 3, 4, 5];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>

			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
				{projects.map((project, i) => (
					<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2 }}
							src="https://github.com/fudge88/dating-app/raw/main/public/assets/img/homess.png"
							alt="image"
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#F7AB0A]">
									Case study {i + 1} of {projects.length}:
								</span>{" "}
								Tinder clone
							</h4>
							<p className="text-center text-lg md:text-left">
								A responsive dynamic app which will run in the browser. Crush is
								an easy to use application, which holds a SQL database, and
								manages matches. The website requires direct input from the
								user, where the user signs up and is easily able to navigate
								through the site. If any 2 users swipe right on one-another,
								this creates a match, and allows the couple to decide on a date.
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#f7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	);
}

export default Projects;
