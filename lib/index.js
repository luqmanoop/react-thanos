import React, { useRef, useState, useEffect } from "react";
import snapSoundEffect from "./assets/thanos_snap_sound.mp3";
import snapReverseSoundEffect from "./assets/thanos_reverse_sound.mp3";
import "./style.css";

export const Thanos = ({ onSnap, onSnapReverse }) => {
	const [animating, setAnimating] = useState(false);
	const ref = useRef();
	const snapSound = new Audio(snapSoundEffect);
	const snapReverseSound = new Audio(snapReverseSoundEffect);

	const addSoundEffect = (snapSoundEffect) => {
		if (snapSoundEffect) {
			snapSound.play();
		} else {
			snapReverseSound.play();
		}
	};

	useEffect(() => {
		const thanos = ref.current;
		const handleAnimationEnd = (e) => {
			if (e.target.classList.contains("snap")) {
				onSnap();
			} else onSnapReverse();
			e.target.classList.remove("animate");
			setAnimating(false);
		};

		thanos.addEventListener("animationend", handleAnimationEnd);

		return () => {
			if (thanos) {
				thanos.removeEventListener("animationend", handleAnimationEnd);
			}
		};
	}, []);

	const handleClick = (e) => {
		if (animating) return;

		setAnimating(true);

		const gauntlet = e.target;
		const snapSoundEffect = gauntlet.classList.toggle("snap");

		gauntlet.classList.toggle("snap-reverse");
		gauntlet.classList.add("animate");

		addSoundEffect(snapSoundEffect);
	};

	return (
		<div ref={ref} className="thanos">
			<div data-testid="gauntlet" onClick={handleClick} className="gauntlet snap-reverse" />
		</div>
	);
};

Thanos.defaultProps = {
	onSnap: () => {},
	onSnapReverse: () => {},
};
