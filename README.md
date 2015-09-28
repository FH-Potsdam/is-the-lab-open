# is the lab open?

![](https://interface.fh-potsdam.de/is-the-lab-open/badge.svg)  

  
## what  
This site is an experiment on location based triggers. Whenever a student needs to know if the Interface Lab is open for consultation he just can load the site. It tells you if the lab is open.  
  
## why  
Short version: "Because we can. Long version: It often occurs that students ask per email if the lab is open. This is a simple way to find out. Also it is a test if location based triggers work accurate.  
  
## how  
On the mobile device of the lab supervisor is a location based trigger installed with <a href="https://ifttt.com">ifttt.com</a>. If he enters the area ifttt calls the API of the application.The sent value is cached for faster response times. According to the result of the cached data the application presents the information when the user loads the site. For further and deeper insight check out the open source <a href="https://github.com/FH-Potsdam/is-the-lab-open">code at github.com</a>.  
  
## who  
This site is build by <a href="https://github.com/fabiantheblind">Fabian "fabiantheblind" Morón Zirfas</a> for the <a href="https://github.com/FH-Potsdam">University of Applied Sciences Potsdam (Germany)</a> with <3.  
  
## Server  

How to set up the server?  

tbd
  
## Authentification  

Currently we have some simple authentification in place so nobody can call the api except for those who now the password and username\*. Create a file under `private/data.json` and add the following content.  

    [
      {
        "id":1,
        "username":"secretname",
        "password":"superlongultrasecretpassword",
        "email":"me@me.io"
      }
    ]

To make a call to the api you can now open the url like this:   

This opens the lab: [https://maker:superlongultrasecretpassword@example.com/is-the-lab-open/api/1](https://maker:superlongultrasecretpassword@example.com/is-the-lab-open/api/1)  


This closes the lab: [https://maker:superlongultrasecretpassword@example.com/is-the-lab-open/api/0](https://maker:superlongultrasecretpassword@example.com/is-the-lab-open/api/0)  

\* Calls like these should only be made over https or you risk man in the middle attacks.    
## License

Copyright (c)  2015 Fabian "fabiantheblind" Morón Zirfas & FH-Potsdam University of Applied Sciences Potsdam (Germany)   
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  