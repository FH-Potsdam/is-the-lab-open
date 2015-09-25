/**
 * This generates the svg file for the badge
 * on request. Currently it gets created every minute
 *
 */
var fs = require('fs');
exports.create = function() {
var ghex = "#45C60B";
var rhex = "#B23D09";
  var res = fs.readFileSync('public/cache/data.json', 'utf8');
  var data = JSON.parse(res);
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="121" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="121" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h97v20H0z"/><path fill="'+ (data.val === 1 ? ghex : rhex ) +'" d="M97 0h24v20H97z"/><path fill="url(#b)" d="M0 0h121v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="48.5" y="15" fill="#010101" fill-opacity=".3">is-the-lab-open?</text><text x="48.5" y="14">is-the-lab-open?</text><text x="108" y="15" fill="#010101" fill-opacity=".3">'+ (data.val === 1 ? 'yes' : 'no' ) +'</text><text x="108" y="14">'+ (data.val === 1 ? 'yes' : 'no' ) +'</text></g></svg>';
   fs.writeFileSync('public/images/badge.svg', svg ); // or this
};