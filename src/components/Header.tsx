import React from "react";
import "./Header.css";

interface Prop {
	user: string;
}

function Header({ user }: Prop) {
	return (
		<header>
			<h1>Ice Cream Wars</h1>
			<span className="fontLight">Welcome {user}</span>
		</header>
	);
}

export default Header;
