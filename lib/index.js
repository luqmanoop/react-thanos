import React, { Fragment, useState, useEffect, useRef } from "react";
import { snapPositions, snapReversePositions } from "./utils";
import "./style.css";

const Thanos = ({ onSnap, onSnapReverse, snapSounds }) => {
	const [snap, setSnap] = useState(true);
	const [snapping, setSnapping] = useState(false);
	const [snap$, snapReverse$] = [useRef(null), useRef(null)];
	let [spritePosition, rafId] = [0, null];

	useEffect(() => {
		snap$.current.style.background = `url(https://i.imgur.com/QbLQGrV.png) -24px -9px`;
		snapReverse$.current.style.background = `url(https://i.imgur.com/jAJqda5.png) -24px -9px`;
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
		if (snapSounds) {
			return snap
				? new Audio(snapSounds.snap).play()
				: new Audio(snapSounds.reverse).play();
		}
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
