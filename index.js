let path = require('path');

let createPattern = function (pattern) {
  return {pattern: pattern, included: true, served: true, watched: false}
};

let initLodash = function (files) {
	let lodashPath = path.dirname(require.resolve('lodash'));
	files.unshift(createPattern(lodashPath + '/lodash.js'));
};

initLodash.$inject = ['config.files'];

module.exports = {
	'framework:lodash': ['factory', initLodash]
};