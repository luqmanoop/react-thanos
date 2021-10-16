import React, { Fragment, useState, useEffect, useRef } from "react";
import { snapPositions, snapReversePositions } from "./utils";
import snapImg from "./assets/thanos_snap.png";
import snapReverseImg from "./assets/thanos_time.png";
import snapSound from "./assets/thanos_snap_sound.mp3";
import snapReverseSound from "./assets/thanos_reverse_sound.mp3";
import "./style.css";

const Thanos = ({ onSnap, onSnapReverse }) => {
	const [snap, setSnap] = useState(true);
	const [snapping, setSnapping] = useState(false);
	const [snap$, snapReverse$] = [useRef(null), useRef(null)];
	let [spritePosition, rafId] = [0, null];

	useEffect(() => {
		snap$.current.style.background = `url(${snapImg}) -24px -9px`;
		snapReverse$.current.style.background = `url(${snapReverseImg}) -24px -9px`;
	});

	const styleGauntlet = styles => {
		const gauntletEl = snap ? snap$.current : snapReverse$.current;
		Object.keys(styles).forEach(prop => {
			gauntletEl.style[prop] = styles[prop];
		});
	};

	const animateGauntlet = () => {
		const spritePositions = snap ? snapPositions : snapReversePositions;
		if (spritePositions.length === spritePosition) {
			spritePosition = 0;
			setSnapping(false);
			cancelAnimationFrame(rafId);
			setSnap(!snap);

			return snap ? onSnap() : onSnapReverse();
		}

		const [width, height] = spritePositions[spritePosition][1];
		const [marginLeft] = spritePositions[spritePosition][2] || [0];
		const [backgroundPosition] = spritePositions[spritePosition];

		styleGauntlet({ width, height, marginLeft, backgroundPosition });

		spritePosition += 1;
		rafId = requestAnimationFrame(animateGauntlet);
	};

	const playSound = () => {
		return snap
			? new Audio(snapSound).play()
			: new Audio(snapReverseSound).play();
	};

	const doSnap = () => {
		if (!snapping) {
			setSnapping(true);
			playSound();
			requestAnimationFrame(animateGauntlet);
		}
	};

	return (
		<Fragment>
			<div onClick={doSnap} className="thanos">
				<div ref={snap$} className={`${!snap ? "hide" : ""} gauntlet`} />
				<div ref={snapReverse$} className={`${snap ? "hide" : ""} gauntlet`} />
			</div>
		</Fragment>
	);
};

Thanos.defaultProps = {
	onSnap: () => {},
	onSnapReverse: () => {}
};

export default Thanos;
