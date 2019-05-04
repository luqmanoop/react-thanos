import babel from "rollup-plugin-babel";
import copy from "rollup-plugin-copy";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";


export default {
	input: "lib/index.js",
	plugins: [
		copy({
			targets: {
				"lib/assets/thanos_snap_sound.mp3": "dist/assets/thanos_snap_sound.mp3",
				"lib/assets/thanos_reverse_sound.mp3":
					"dist/assets/thanos_reverse_sound.mp3"
			}
		}),
		url({
			limit: 250 * 1024
		}),
		postcss(),
		babel({
			exclude: "node_modules/**"
		}),
		resolve(),
		peerDepsExternal(),
	],
	output: [
		{
			file: pkg.module,
			format: "es"
		},
		{
			file: pkg.main,
			format: "cjs"
		}
	]
};
