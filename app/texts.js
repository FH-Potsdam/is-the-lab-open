var pkg = require('../package.json');
exports.get = function() {
  var data = {

    who: 'This site is build by <a href="https://github.com/fabianmoronzirfas">Fabian Morón Zirfas</a> for the <a href="https://github.com/FH-Potsdam">University of Applied Sciences Potsdam (Germany)</a> with <i class="fa fa-heart"></i>.',
    what: 'This site is an experiment on location based triggers. Whenever a student needs to know if the Interface Lab is open for consultation he just can load the site. It tells you if the lab is open.',
    why: 'Short version: "Because we can." Long version: "It often occurs that students ask per email if the lab is open. This is a simple way to find out. Also it is a test if location based triggers work accurate."',
    how: 'On the mobile device of the lab supervisor is a location based trigger installed with <a href="https://ifttt.com">ifttt.com</a>. If he enters the area ifttt calls the API of the application.The sent value is cached for faster response times. According to the result of the cached data the application presents the information when the user loads the site. For further and deeper insight check out the open source <a href="https://github.com/FH-Potsdam/is-the-lab-open">code at github.com</a>.',
    version: pkg.version
  };
  return data;
};

