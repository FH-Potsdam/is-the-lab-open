
    @reboot /usr/local/bin/forever start -l /home/nodejs/apps/logs/is-the-lab-open.log -e /home/nodejs/apps/errs/is-the-lab-open-err.log -a  /home/nodejs/apps/is-the-lab-open/app.js