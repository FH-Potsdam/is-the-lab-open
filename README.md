# is the lab open?

![](https://interface.fh-potsdam.de/is-the-lab-open/badge.svg)  

  
## what?  
This site is an experiment on location based triggers. Whenever a student needs to know if the Interface Lab is open for consultation he just can load the site. It tells you if the lab is open.  
  
## why?  
Short version: "Because we can." Long version: "It often occurs that students ask per email if the lab is open. This is a simple way to find out. Also it is a test if location based triggers work accurate."  
  
## how?  
On the mobile device of the lab supervisor is a location based trigger installed with <a href="https://ifttt.com">ifttt.com</a>. If he enters the area ifttt calls the API of the application.The sent value is cached for faster response times. According to the result of the cached data the application presents the information when the user loads the site. For further and deeper insight check out the open source <a href="https://github.com/FH-Potsdam/is-the-lab-open">code at github.com</a>.  
  
## who?  
This site is build by <a href="https://github.com/fabiantheblind">Fabian "fabiantheblind" Morón Zirfas</a> for the <a href="https://github.com/FH-Potsdam">University of Applied Sciences Potsdam (Germany)</a> with <3.  
  
## authentication to the API  

Currently we have some simple authentication in place so nobody can call the api except for those who now the password and username\*. Create a file under `private/data.json` and add the following content.  

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

  
## ifttt.com

To setup the location based triggers you need to enable the Maker channel and of course the location triggers.  
Take a look at these screengraps. You need to enter your API url and the credentials which you can see in the section [authentification](#authentification).  

### request if you enter an area

![](docs/images/ifttt-recipie-location-trigger-enter.png)  
  

### request if you exit an area

![](docs/images/ifttt-recipie-location-trigger-enter.png)    
## Server & deployment   

On your server you need to have Node.js installed. Due to the recent changes in Node.js I recommend installing [nvm](https://github.com/creationix/nvm) and installing Node.js that way. This version is developed under Node.js Version 0.12.7 and we had some issues building against v4.\*.  
After that install [forever](https://github.com/foreverjs/forever) globally by running:  

    npm i forever bower grunt-cli -g  

Clone the repo somewhere into your users folder e.g.  

    mkdir ~/apps && cd ~/apps
    git clone git@github.com:FH-Potsdam/is-the-lab-open.git && cd is-the-lab-open/
    npm install && bower install

_In future version we will try to have forever, bower and grunt-cli as local dependiencies._  

To build the release version run:  

    grunt  

To build the README run:  

    grunt docs  

Now add to your servers document root the following .htaccess (can be found also in htaccess-example). 

    RewriteEngine On
    RewriteRule ^is-the-lab-open/(.*) http://localhost:61424/$1 [P]
    RewriteRule ^is-the-lab-open http://localhost:61424/$1 [P]

__!Hint:__This rule should go into the documentRoot not into a folder with that name.
Creating a folder with the rewirte source name, in our case "is-the-lab-open", results a non reachable application. The folder should not exist!  

Create a new crontab with the following command:  

    crontab -e

and add the following lines:  

    @reboot /usr/local/bin/forever start -l /path/to/your/logs/is-the-lab-open.log -e /path/to/your/errs/is-the-lab-open-err.log -a  /home/you/apps/is-the-lab-open/app.js  

Start the app by running (when you are still in the project folder):  

    forever start -l /path/to/your/logs/is-the-lab-open.log -e /path/to/your/errs/is-the-lab-open-err.log -a  app.js

Go to [https://fancy-domain.io/is-the-lab-open/](https://fancy-domain.io/is-the-lab-open/).  
Your app should be live.  

To see the badge got to [https://fancy-domain.io/is-the-lab-open/badge.svg](https://fancy-domain.io/is-the-lab-open/badge.svg)  

## Forever 

To have this project running all the time we need some tools.

1. [forever](https://www.npmjs.com/package/forever)  
2. [forever-service](https://www.npmjs.com/package/forever-service)  

Forever is a Node.js tool to run applications in the background.  

### forever setup
Install via:  

```bash
sudo npm install forever -g
```

Now you can run your app in the background by running

```bash
cd path/to/where/your/app/is/home/folder/or/something/
 forever start app.js
```

It will put the app into the background so you can leave the session without stopping the app.  
If you want some more control over your app, you can e.g. define where the log files should go.

```bash
start -l logs/is-the-lab-open.log -e logs/is-the-lab-open-err.log -a  app.js
```

### what happens at reboot?

That's great. Now we still have a problem when we reboot the server. Forever wont restart automagically.  

For this we use forever-service.  
Install like in its instructions.

```
sudo npm install forever-service -g
```

Now we can setup our service.  

```bash
sudo forever-service install isthelabopen -e "ENV=production"
```

If everything runs fine you will get the following output:  

```bash
Commands to interact with service isthelabopen
Start   - "sudo service isthelabopen start"
Stop    - "sudo service isthelabopen stop"
Status  - "sudo service isthelabopen status"
Restart - "sudo service isthelabopen restart"
```

### Some minor issues

We experienced some minor issues when installing a service with forever-service on Debian 7.9

We have a specific user running the app. (not root). When trying to run the installation of a new service we had to add `/sbin` and `/usr/sbin` to that users path or the commands `insserv` and `service` cant be found. Thats it. 🦄 🌈  

## License

Copyright (c)  2015 Fabian "fabiantheblind" Morón Zirfas & FH-Potsdam University of Applied Sciences Potsdam (Germany)   
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software  without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  