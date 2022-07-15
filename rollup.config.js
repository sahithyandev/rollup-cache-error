import { cacheBuild } from "rollup-cache";

const cacheConfig = {
	name: "testing",
};

export default cacheBuild(cacheConfig, {
	input: "src/main.js",
	output: {
		dir: "dist",
		format: "iife",
	},
});
