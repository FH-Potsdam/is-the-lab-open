var txt = require('../app/texts');
var texts = txt.get();

exports.who = function(req, res) {
  res.render('about', {
    title: 'Is the lab open?',
    val: 'who?',
    text: texts.who
  });
};

exports.what = function(req, res) {
  res.render('about', {
    title: 'Is the lab open?',
    val: 'what?',
    text: texts.what
  });
};

exports.why = function(req, res) {
  res.render('about', {
    title: 'Is the lab open?',
    val: 'why?',
    text: texts.why
  });
};

exports.how = function(req, res) {
  res.render('about', {
    title: 'Is the lab open?',
    val: 'how?',
    text: texts.how
  });
};

exports.version = function(req, res) {
  res.render('about', {
    title: 'Is the lab open?',
    val: 'version?',
    text: texts.version
  });
};
