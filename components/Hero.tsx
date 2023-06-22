import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"hello, im fahra",
			"i'm a software developer",
			"who loves to get creative",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div>
			<p>{text}</p>
		</div>
	);
}

export default Hero;
