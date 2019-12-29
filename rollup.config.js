/*import auto from '@rollup/plugin-auto-install';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

*/
import auto from '@rollup/plugin-auto-install';

import resolve from  '@rollup/plugin-node-resolve';

import commonJS from 'rollup-plugin-commonjs'
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/docbat-lib.js',
		output: {
			name: 'docbat',
			file: "./dist/docbat.js",
			format: 'umd'
		},
		plugins: [

			auto(), 
			resolve()
			//commonjs() // so Rollup can convert `ms` to an ES module
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	/*
	{
		input: 'src/main.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}*/
];