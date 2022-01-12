import React from "react";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
	return (
		<div className="App">
			<Header user="Chirpus" />
			{/* <div className="allAdContainer">
				<Ad flavor="Strawberry" fontSize={40} darkTheme={true} />
				<Ad flavor="Vanilla" fontSize={50} darkTheme={false} />
				<Ad flavor="Chocolate" fontSize={30} darkTheme={true} />
			</div> */}
			<div className="BodyComponents">
				<AdDesigner />
				<Votes />
			</div>
		</div>
	);
}

export default App;
