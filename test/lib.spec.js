import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "regenerator-runtime";
import "@testing-library/jest-dom";

import { Thanos } from "../lib";

window.HTMLMediaElement.prototype.play = () => {};

const onSnapMock = jest.fn();
const onSnapReverseMock = jest.fn()

const App = () => {
	return <Thanos onSnap={onSnapMock} onSnapReverse={onSnapReverseMock} />;
};

describe("Gauntlet", () => {
	it("callbacks onSnap", async () => {
		const { findByTestId } = render(<App />);
		const gauntlet = await findByTestId("gauntlet");
		fireEvent.click(await findByTestId("gauntlet"));
		fireEvent.animationEnd(gauntlet);
		expect(gauntlet.classList.contains('snap')).toBeTruthy();
        expect(onSnapMock).toHaveBeenCalledTimes(1);
	});
    
    it("callbacks onSnapReverseMock", async () => {
		const { findByTestId } = render(<App />);
		const gauntlet = await findByTestId("gauntlet");
		// snap
        fireEvent.click(await findByTestId("gauntlet"));
		fireEvent.animationEnd(gauntlet);
        // undo snap
        fireEvent.click(await findByTestId("gauntlet"));
		fireEvent.animationEnd(gauntlet);
		
        expect(gauntlet.classList.contains('snap-reverse')).toBeTruthy();
        expect(onSnapReverseMock).toHaveBeenCalledTimes(1);
	});
});
