import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src="https://f.hubspotusercontent40.net/hubfs/14563840/AND%20Logos/AND%20Digital_LOGO_SM_icon.png"
				alt="and digital logo"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">Associate Developer</h4>
				<p className="font-bold text 2-xl mt-1">And Digital ltd</p>
				<div className="flex space-x-2 my-2">
					<img
						className="h-10 w-10 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
					/>
				</div>
				<p className="uppercase py-5 text-gray-500">
					started: 11/2022- ended: n/a
				</p>
				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>summary point</li>
					<li>summary point</li>
					<li>summary point</li>
				</ul>
			</div>
		</article>
	);
}
