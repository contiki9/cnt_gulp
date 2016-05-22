var path = require('path');
var root = path.resolve(__dirname + '/..');

module.exports = {
  root: root,
  src: root + '/src/',
  css: root + '/src/',
  sass: root + '/src/',
  js: root + '/src/js/',
  img: root + '/src/img/',
  data: root + '/src/_data/',
  dist: root + '/dist/',
  jade: root + '/jade/',
  guide: root + '/guide/',
  guideCss:['../src/common/css/style.css'],
  siteName:'StyleGuide',
  sassOptions: {
    includePaths: ['node_modules/'],
    outputStyle: 'compressed'
  }
};
