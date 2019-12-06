[![docbat](./icon/docbat-logo-small.png)](http://www.deftio.com/docbat)
[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)

docbat is a simple commandline javascript utility which takes a markdown file and converts to an html page.  This is useful for build scripts where you want to able to just browse a directory and have see the same content as a README.md but don't have a markdown viewer installed (say as a browser extension).

docbat provides methods to add formatting to the HTML page such as custom CSS or other constructs after the markdown conversion so that the HTML isn't just raw.  Default options add some simple margins and padding for reasonable view across desktop and mobile device contexts.


## Usage 
(assumes all installation has been completed.  see Installation section)

### Default ==> looks for README.md and converts to index.html

```bash 
./docbat.js -i myfile.md -o myoutput.html
```

The actual input files and output can be changed at command line by providing parameters:
```bash 
#Installation (server side)  
./docbat.js
```

## Web Converter
If you've just cloned this repo you can try the web convertor tool here: [mado2htm web](./docbat-web.html).  It should run from either a served (e.g. http/https) or (file://) based URL.

## Dependancies

mado2htm uses the nodejs javscript runtime along with some packages which are available via the npmjs javascript packaging service.

Technologies:
* nodejs javascript runtime -  [nodejs](https://nodejs.org/en/)  
* npm - package manager javascript packages - [npm](https://docs.npmjs.com/cli/install)

Key Packages:
* uses showdown.js for markdown parsing - [showdown.js](https://www.npmjs.com/package/showdown)
* uses bitwrench.js for page formatting duties - [bitwrench](https://www.npmjs.com/package/bitwrench)
* uses command-line-args for argument processing



 

## Source code home  
all source is at github:  
[mado2htm on github](http://github.com/deftio/mado2htm)  


## Linting 
mado2htm uses eslint for static code checking and analysis.

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
mado2htm is released under the OSI Approved FreeBSD 2-clause license  

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




