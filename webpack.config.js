//webpack configuration for building in to a docbat  module
//
const path = require('path');

module.exports = {
	entry: './src/docbat-lib.js', 
	mode : 'development',
	node: {
	  //fs: 'empty'
	},

	output: {
		path : path.resolve(__dirname,'dist'),
		filename : 'docbat.js',
		library : 'docbat',
		libraryTarget: 'umd',
		umdNamedDefine: true,   // Important
		globalObject:  `(typeof self !== 'undefined' ? self : this)` //'this'
		//globalObject: `this`
	
	},

	externals: {
		"fs": "commonjs fs",
	}
};