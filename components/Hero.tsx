import React from "react";
import Image from "next/image";
import photo from "../public/img/photo1.jpg";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ["Hello, I'm Fahra", "Frontend developer", "UX/UI Designer!"],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 justify-center text-center over flow-hidden">
			<BackgroundCircles />
			<Image
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src={photo}
				alt="Picture of Fahra"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Software Engineer
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
					<span>{text}</span>
					<Cursor cursorColor="orange" />
				</h1>

				<div className="pt-2">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
