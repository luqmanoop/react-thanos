import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import rebase from "rollup-plugin-rebase";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import transformRuntime from "@babel/plugin-transform-runtime";
import presetEnv from "@babel/preset-env";
import presetReact from "@babel/preset-react";

import pkg from "./package.json";

const sourcemap = false;

export default {
	input: "lib/index.js",
	plugins: [
		rebase({
			assetFolder: "assets",
		}),
		nodeResolve(),
		babel({
			babelrc: false,
			babelHelpers: "runtime",
			presets: [presetEnv, presetReact],
			plugins: [transformRuntime],
		}),
		peerDepsExternal(),
		
	],
	output: [
		{
			file: pkg.module,
			format: "es",
			sourcemap,
		},
		{
			file: pkg.main,
			format: "cjs",
			sourcemap,
		},
	],
};
