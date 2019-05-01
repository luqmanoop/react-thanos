import React, { Fragment, useEffect, useRef } from "react";
import snapAudio from "./assets/thanos_snap_sound.mp3";
import { snapPositions } from "./utils";
import "./style.css";

export default ({ onSnap }) => {
	const gauntlet$ = useRef(null);
	const snapAudio$ = useRef(null);
	let [position, canSnap, rafId] = [0, true, null];

	useEffect(() => {
		snapAudio$.current.addEventListener("pause", () => {
			snapAudio$.current.currentTime = 0;
			cancelAnimationFrame(rafId);
			return onSnap ? onSnap() : null;
		});
	});

	const styleGauntlet = styles => {
		Object.keys(styles).forEach(prop => {
			gauntlet$.current.style[prop] = styles[prop];
		});
	};

	const animateSnap = () => {
		if (snapPositions.length === position) {
			position = 0;
			setTimeout(() => {
				snapAudio$.current.pause();
				canSnap = true;
			}, 700);
			return;
		}

		const [width, height] = snapPositions[position][1];
		const [marginLeft] = snapPositions[position][2] || [0];
		const [backgroundPosition] = snapPositions[position];

		styleGauntlet({ width, height, marginLeft, backgroundPosition });

		position += 1;
		rafId = requestAnimationFrame(animateSnap);
	};

	const snapFinger = () => {
		if (canSnap) {
			canSnap = false;
			snapAudio$.current.play();
			requestAnimationFrame(animateSnap);
		}
	};

	return (
		<Fragment>
			<audio preload="true" ref={snapAudio$} src={snapAudio} />
			<div onClick={snapFinger} className="thanos">
				<div ref={gauntlet$} className="gauntlet" />
			</div>
		</Fragment>
	);
};
