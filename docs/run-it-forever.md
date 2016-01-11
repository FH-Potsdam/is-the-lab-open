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