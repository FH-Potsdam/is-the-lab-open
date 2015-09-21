# is the lab open?

![](https://interface.fh-potsdam.de/is-the-lab-open/badge.svg)  

## what?
This site is an experiment on location based triggers. Whenever a student needs to know if the Interface Lab is open for consultation he just can load the site. It tells you if the lab is open.

## why?

Short version: "Because we can. Long version: It often occurs that students ask per email if the lab is open. This is a simple whay to find out. Also it is a test if location based triggers work accurate.  

## how?  
On the mobile device of the lab supervisor is a location based trigger installed with <a href="https://ifttt.com">ifttt.com</a>. If he enters the area ifttt writes a variable into a google spreadsheets. 1 for yes 0 for no. This gets read from the nodejs application. According to the result of the query the application presents the information. For further and deeper insight check out the open source code at github.com (coming soon).  

##who?  
This site is build by <a href="https://github.com/fabiantheblind">Fabian "fabiantheblind" Morón Zirfas</a> for the <a href="https://github.com/FH-Potsdam">University of Applied Sciences Potsdam (Germany)</a> with <3.  

## License


Copyright (c)  2015 Fabian "fabiantheblind" Morón Zirfas & FH-Potsdam University of Applied Sciences Potsdam (Germany)   
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

see also http://www.opensource.org/licenses/mit-license.php

