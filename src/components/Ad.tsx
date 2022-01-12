import React from "react";
import "./AdDesigner.css";

interface AdProps {
	flavor: string;
	fontSize: number;
	darkTheme: boolean;
}

function Ad({ flavor, fontSize, darkTheme }: AdProps) {
	return (
		<div className="Ad">
			<div
				className={
					darkTheme ? "adContainer darkTheme" : "adContainer lightTheme"
				}
			>
				<p>Vote For</p>
				<h3 style={{ fontSize: `${fontSize}px` }}>{flavor}</h3>
			</div>
		</div>
	);
}

export default Ad;
