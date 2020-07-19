#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"


//docbat this is the command line tool.
var commandLineArgs = require('command-line-args'); // command line args parser

//var bw 				= require('bitwrench');
var docbat  		= require('../dist/docbat.js');        //require('../dist/docbat.js').default;        

console.log(docbat, typeof docbat, Object.keys(docbat));
//options / cmd-line
var cmdLineDefinitions = [
	  // these options can also be passed in via a config file
	  { name: 'verbose'		, alias: 'v'	, type: String,   defaultValue: "true", description : "show verbose processing of output" }, 
	  { name: 'inputFile'	, alias: 'i' 	, type: String,   defaultValue: false, description : "input filename"}, 
	  { name: 'outputFile'	, alias: 'o' 	, type: String,   defaultValue: false, description: "output filename"}, 
	  { name: 'console' 	,  				  type: String,   defaultValue: "console.log" }, 
	  { name: 'autogen_cmt'	,  				  type: Boolean,  defaultValue: true, description: "show autogenerated message as comment in output html (default true)"}, 
	  { name: 'favicon'     , alias: 'f'    , type: String,   defaultValue: "", description: "path to favicon"}, 
	  { name: 'favicon_type',                 type: String,   defaultValue: "image/x-icon", description:"force image type for favicon link.  (default is auto detected)"}, 
	  { name: 'hPadding'    ,                 type: String,   defaultValue: "10%", description : "default horizontal page margins"}, 

	  //the options below are only relavant to the CLI
	  { name: 'config'      , alias: 'c'	, type: String,   defaultValue: false, description : "configuration file for options (json)"},
	  { name: 'help'		, alias: 'h'	, type: Boolean,  defaultValue: false, description : "print help "}
	  
	];

try {
	var cmdLineOpts  = commandLineArgs(cmdLineDefinitions);

	//these are used in the program
	var options = {
		"verbose" 			: cmdLineOpts.verbose,
		"inputFile" 		: cmdLineOpts.inputFile,
		"outputFile"		: cmdLineOpts.outputFile,
		"cons"  			: cmdLineOpts.console == "console.log" ? console.log : function(){/*todo create writable stream to file*/},
		"autogen_cmt"		: cmdLineOpts.autogen_cmt == true ? "\n<!-- \nThis file autogenerated by docbat.js (https://npmjs.com/docbat)  \nAny manual edits may be lost.\n-->\n" : "",
		"favicon"			: cmdLineOpts.favicon == "" ? "" : bw.html(["link",{rel:"icon",type:cmdLineOpts.favicon_type, href:cmdLineOpts.favicon},""]),
		"bodyPaddingHoriz"  : cmdLineOpts.hPadding,
		"metacontent"		: cmdLineOpts.meta ? bw.html(["meta",cmdLineOpts.meta,""]): ""
		
	}

	docbat.emitHTML(options);
}
catch (e) {
	console.log("Error: " + e);
}
//console.log("process.arv ==>", process.argv)

