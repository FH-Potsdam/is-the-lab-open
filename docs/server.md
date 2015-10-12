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




