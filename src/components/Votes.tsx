import React, { useState } from "react";
import "./Votes.css";

function Votes() {
	const [chocolateVotes, setChocolateVotes] = useState(0);
	const [vanillaVotes, setVanillaVotes] = useState(0);
	const [strawberryVotes, setStrawberryVotes] = useState(0);
	let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;
	let chocolatePercent = (chocolateVotes / totalVotes) * 100 || 0;
	let vanillaPercent = (vanillaVotes / totalVotes) * 100 || 0;
	let strawberryPercent = (strawberryVotes / totalVotes) * 100 || 0;

	return (
		<div id="Votes">
			<h2>Vote Here</h2>
			<button onClick={() => setChocolateVotes(chocolateVotes + 1)}>
				Chocolate
			</button>
			<button onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
			<button onClick={() => setStrawberryVotes(strawberryVotes + 1)}>
				Strawberry
			</button>

			{/* VOTING SECTION */}

			{totalVotes === 0 ? (
				<span className="fontLight">
					<p>No votes yet.</p>
				</span>
			) : (
				<div className={`votes`}>
					<div
						className={chocolateVotes === 0 ? "empty" : "chocolateContainer"}
					>
						<p>
							Chocolate:{" "}
							<span className="fontLight">
								{chocolateVotes} ({chocolatePercent.toFixed(1)}%)
							</span>
						</p>
						<div
							className="chocolateVotes"
							style={{ width: `${chocolatePercent}%` }}
						></div>
					</div>

					<div className={vanillaVotes === 0 ? "empty" : "chocolateContainer"}>
						<p>
							Vanilla:{" "}
							<span className="fontLight">
								{vanillaVotes} ({vanillaPercent.toFixed(1)}%)
							</span>
						</p>
						<div
							className="vanillaVotes"
							style={{ width: `${vanillaPercent}%` }}
						></div>
					</div>

					<div
						className={strawberryVotes === 0 ? "empty" : "chocolateContainer"}
					>
						<p>
							Strawberry:{" "}
							<span className="fontLight">
								{strawberryVotes} ({strawberryPercent.toFixed(1)}%)
							</span>
						</p>
						<div
							className="strawberryVotes"
							style={{ width: `${strawberryPercent}%` }}
						></div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Votes;
