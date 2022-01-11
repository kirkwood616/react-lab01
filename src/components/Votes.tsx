import React, { useState } from "react";
import "./Votes.css";

function Votes() {
	const [chocolateVotes, setChocolateVotes] = useState(0);
	const [vanillaVotes, setVanillaVotes] = useState(0);
	const [strawberryVotes, setStrawberryVotes] = useState(0);
	let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;
	let chocolatePercent = (chocolateVotes / totalVotes) * 100;
	let vanillaPercent = (vanillaVotes / totalVotes) * 100;
	let strawberryPercent = (strawberryVotes / totalVotes) * 100;

	return (
		<div id="Votes">
			<h2>Vote Here</h2>
			<button>Chocolate</button>
			<button>Vanilla</button>
			<button>Strawberry</button>
			<p>
				Chocolate: {chocolateVotes}({chocolatePercent}%)
			</p>
			<div className="chocolateVotes"></div>
			<p>
				Vanilla: {vanillaVotes}({vanillaPercent}%)
			</p>
			<div className="vanillaVotes"></div>
			<p>
				Strawberry: {strawberryVotes}({strawberryPercent}%)
			</p>
			<div className="strawberryVotes"></div>
		</div>
	);
}

export default Votes;
