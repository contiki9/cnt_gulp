var path = require('path');
var root = path.resolve(__dirname + '/..');

module.exports = {
	root: root,
	src: root + '/public_html/src/',
	css: root + '/public_html/src/',
	sass: root + '/public_html/src/',
	js: root + '/public_html/src/js/',
	img: root + '/public_html/src/img/',
	data: root + '/public_html/src/_data/',
	dist: root + '/public_html/dist/',
	jade: root + '/public_html/jade/',
	guide: root + '/public_html/guide/',
	guideCss: ['../src/common/css/style.css'],
	siteName: 'StyleGuide',
	sassOptions: {
		includePaths: ['node_modules/'],
		outputStyle: 'compressed'
	}
};
