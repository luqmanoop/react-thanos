import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Thanos } from "react-thanos";

import logo from "./assets/logo.svg";

import "./style.css";

const App = () => {
	const [snap, setSnap] = useState(null);

	return (
		<div className={`app ${snap ? "light" : "dark"}`}>
			<h1>
				<span>React </span>
				<Thanos
					onSnap={() => setSnap(true)}
					onSnapReverse={() => setSnap(false)}
				/>{" "}
				<span>Thanos</span>
			</h1>
			<img alt="react logo" className="logo" src={logo} />
			<p>
				React (anyhow) when Thanos snaps his finger.{" "}
				<i>Click the gauntlet to see it in action</i>
			</p>
			<div>
				<a href="https://github.com/codeshifu/react-thanos">
					View it on GitHub
				</a>
			</div>
			<br />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
