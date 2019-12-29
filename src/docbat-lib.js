


//#!/bin/sh
//':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

//The above shebang allows running on systems whether nodejs exec is called 'node'
//or called 'nodejs' which is common on many debian systems such as Ubuntu.

//begin actual javascript below
"use strict";

//packages
//var showdown 	= require('showdown');         	// markdown parser & converter
//var bw 		  	= require('bitwrench');  		// html page scripting engine
//var fs 			= require('fs');

import * as showdown from "showdown";
import * as bw from "bitwrench";

var docbat =function() { 
	var r = {
		emitHTML : function (opts) {
			var mdconverter 	= new showdown.Converter();
			if (opts.inputFile && opts.outputFile) { // user has provided input and outputfiles...
				try {
				 		bw.getFile(opts.inputFile,function(text){ 
					 	 	if (text.length > 0) {

					 			var convertedContent      = mdconverter.makeHtml(text);
						 		//Note to user... you now have html converted markdown in the HTML variable.  
						 		// if you wish to custimze the html (theme it etc) you can now do that...

						 		//begin minor formatting stuff using bitwrench to add proper header, footer etc
						 		//bitwrench can use JSON to create HTML page content for see bitwrench.js for more details on controlling html output gen
						 		var pageContent = 
						 			[
						 				"html", {},
							 				[
										 		["head", {}, 
										 			[
										 				opts.metacontent,
										 				opts.favicon,
										 				opts.autogen_cmt,
										    			["style",{},bw.CSSSimpleStyles()],
										    			["style",{},bw.makeCSS([[".dbat",{"padding-left":opts.bodyPaddingHoriz,"padding-right":opts.bodyPaddingHoriz}]])]
										  			]
										 		],
										 		["body",{"class":"bw-def-page-setup bw-font-sans-serif dbat"},
										 			[
										 				"<br><br>",
										 				convertedContent
													]
										  		]
										 	]
									];

								//now convert to final html format
						 		var html = bw.html(pageContent);

						 		// save the final html to a file
						 		bw.saveClientFile(opts.outputFile,html);
						 	}
						 	else {
						 		if (opts.verbose != "silent")
						 			opts.cons("docbat.js error reading input file: " + opts.inputFile);
						 	}
				 		});
				}
				catch(e) {
					if (opts.verbose != "silent")
						opts.cons("docbat.js error: ",e);
				}

				opts.cons("docbat.js : converting "+opts.inputFile+" to " + opts.outputFile);
			}
		},

	 	version : function () {
			    var v = {
		        "version"   : "0.9", 
		        "about"     : "docbat is a library for transforming data to html.", 
		        "copy"      : "(c) M A Chatterjee deftio (at) deftio (dot) com",    
		        "url"       : "http://github.com/deftio/bitwrench",
		        "license"   : "BSD-2-Clause"
		    };
		    return v;
		}
	}
	return r;
}

export default docbat();


