import React, { useState } from "react";
import ReactDOM from "react-dom";
import Thanos from "react-thanos";
import "./style.css";

const App = () => {
	const [snap, setSnap] = useState(null);

	return (
		<div className={`${snap ? "night" : ""} app`}>
			<header>
				<h1>React Thanos {snap ? "🌒" : "🌤️"}</h1>
				<Thanos
					onSnap={() => setSnap(true)}
					onSnapReverse={() => setSnap(false)}
				/>
			</header>
			<p className="intro">
				React (anyhow) when Thanos snaps his finger.
				<i>Click the gauntlet to see it in action</i>
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod
				incidunt, veritatis iure atque exercitationem molestias provident
				impedit quibusdam mollitia doloribus doloremque reprehenderit? Quidem a
				quod doloremque dolorem placeat totam.
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
