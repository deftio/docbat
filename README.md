[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)
[![NPM version](https://img.shields.io/npm/v/docbat.svg?style=flat-square)](https://www.npmjs.com/package/docbat)

[![docbat](./icon/docbat-logo-small.png)](http://www.deftio.com/docbat)

Docbat is a simple commandline javascript utility which takes coverts several file types html pages.  This is useful for build scripts where you want to able to just browse a directory and have see the same content as a README.md but don't have a markdown viewer installed (say as a browser extension).

Docbat provides methods to add formatting to the HTML page such as custom CSS or other constructs after the markdown conversion so that the HTML isn't just raw.  Docbat's default options provide simple margins and padding for reasonable view across desktop and mobile device contexts.

Supported input file types:
* Markdown
* raw text
* JSON objects
* proper YAML files
* tab delimited text (also see examples for adding titles)
* images (no processing is performed on the images)

Supported output:
* HTML page (with default headers / titles which are overridable)
* HTML raw (just HTML which can then be chained / piped together)
* HTML-JSON - as a JSON construct (this leverages the bitwrench.js library, see that library for more details on npm or github)

Docbat exposes the following file distribution libraries:
* docbat.js     - ES5 / browser library for doing all operations.  
* docbat.mjs    - ES6 module (uses export/import otherwise same as docbat.js)
* docbat-cli.js - commandline program for scriptting operations


## Usage at Commandline

simple usage
``` 
./docbat-cli.js -i myfile.md -o myoutput.html

```

type docbat --help for more commandline options


## Web Converter
If you've just cloned this repo you can try the web converter tool here: [docbat](./docbat-web.html).  It should run correctly from either a served (e.g. http/https) or (file://) based URL.  The web converter just uses the docbat.js library as script tag.

A hosted version is also available here: [docbat-web](https://deftio.com/docbat/docbat-web.html).  
No information is stored in the server and all conversions are done in the webpage / webbrowser.

## Usage as a library


## Dependancies (only important if building from source)
docbat uses the nodejs javscript runtime along with some packages which are available via the npmjs javascript packaging service.

Technologies:
* nodejs javascript runtime -  [nodejs](https://nodejs.org/en/)  
* npm - package manager javascript packages - [npm](https://docs.npmjs.com/cli/install)

Key Packages:
* showdown.js for markdown parsing - [showdown.js](https://www.npmjs.com/package/showdown)
* bitwrench.js for page formatting duties - [bitwrench](https://www.npmjs.com/package/bitwrench)
* command-line-args for argument processing - [command-line-args.js](https://www.npmjs.com/package/command-line-args)
  
For buildings from Source:
* webpack and webpackcli
* del-cli

For Testing:
* 

   

## Source code home  
all source is at github:  
[docbat  on github](http://github.com/deftio/docbat )  


## Linting 
docbat  uses eslint for static code checking and analysis.

```bash
npm install eslint --save-dev

./node_modules/.bin/eslint --init

```
Now run the lint test like this:
```bash
./node_modules/.bin/eslint docbat.js   
```

## Release History  
* 0.9x Initial release  
  
## License  
docbat  is released under the OSI Approved FreeBSD 2-clause license  

Copyright (c) 2011-19, M. A. Chatterjee <deftio at deftio dot com>  
All rights reserved.  
  
Redistribution and use in source and binary forms, with or without  
modification, are permitted provided that the following conditions are met:  
  
* Redistributions of source code must retain the above copyright notice, this  
  list of conditions and the following disclaimer.  

* Redistributions in binary form must reproduce the above copyright notice,  
  this list of conditions and the following disclaimer in the documentation  
  and/or other materials provided with the distribution.  

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"  
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE  
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE  
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE  
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL  
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR  
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER  
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,  
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE  
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  




