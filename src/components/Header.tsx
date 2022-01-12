import React from "react";
import "./Header.css";

interface Prop {
	user: string;
}

function Header({ user }: Prop) {
	return (
		<header>
			<h1>Ice Cream Wars</h1>
			{/* <div> */}
			<span className="fontLight">Welcome {user}</span>
			{/* </div> */}
		</header>
	);
}

export default Header;
