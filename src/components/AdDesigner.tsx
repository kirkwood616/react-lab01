import React, { useState } from "react";
import "./AdDesigner.css";

function AdDesigner() {
	const [flavor, setFlavor] = useState("");
	const [colorTheme, setColorTheme] = useState(true);
	let addTheme = "";
	addTheme = colorTheme ? " lightTheme" : " darkTheme";
	const [fontSize, setFontSize] = useState(40);

	return (
		<div id="AdDesigner">
			<h2>Ad Designer</h2>
			<div className={"adContainer" + addTheme}>
				<p>Vote For</p>
				<h3 style={{ fontSize: `${fontSize}px` }}>{flavor}</h3>
			</div>
			<p>What to Support</p>
			<button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
			<button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
			<button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
			<p>Color Theme</p>
			<button onClick={() => setColorTheme(true)}>Light</button>
			<button onClick={() => setColorTheme(false)}>Dark</button>
			<p>Font Size</p>
			<button onClick={() => setFontSize(fontSize - 1)}>Down</button>
			<span className="fontSize">{fontSize}</span>
			<button onClick={() => setFontSize(fontSize + 1)}>Up</button>
		</div>
	);
}

export default AdDesigner;
