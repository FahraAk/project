import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>Fahra's Project</title>
			</Head>
			<h1 className="text-red-500"> testing</h1>
		</div>
	);
}
