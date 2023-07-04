import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Head>
				<title>Fahra's Project</title>
			</Head>
			<Header />

			{/* hero */}
			<section id="hero" className="snap-start">
				<Hero />
			</section>

			{/* about */}
			<section id="about" className="snap-center">
				<About />
			</section>

			{/* work experience */}
			<section id="experience" className="snap-center">
				<WorkExperience />
			</section>

			{/* skills */}
			<section id="skills" className="snap-center">
				<Skills />
			</section>

			{/* projects */}
			<section id="projects" className="snap-center">
				<Projects />
			</section>
		</div>
	);
}
