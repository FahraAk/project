import React from "react";
import { motion } from "framer-motion";
import photo from "../public/img/photo.jpg";

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative text-center ms:text-left md:flex-row max-w-7xl px-10 justify-evenly x-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.img
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.2 }}
				src="https://media.licdn.com/dms/image/C4D03AQHbg_94EnqVJg/profile-displayphoto-shrink_200_200/0/1643646825752?e=1694044800&v=beta&t=xMvtD-9cEtNrwe4zH9BQlxDYIe0qsMc6xqVBF7Bm_y0"
				alt="picture of Fahra"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					A little{" "}
					<span className="underline decoration-[#f7ab0a]/50">background </span>
					about me
				</h4>
				<p className="text-base">
					Energetic and curious developer, with a passion for blending the art
					of design with the skill of programming to deliver immersive and
					engaging user experience through effective web development. Fahra has
					worked on several projects in dynamic teams, her down-to-earth and
					positive nature allows her to build trusting relationships with
					colleagues and stakeholders around her.
				</p>
			</div>
		</motion.div>
	);
}
