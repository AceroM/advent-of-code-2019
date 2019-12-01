const _ = require('lodash');
const run = require('./run');

const args = _.compact([process.argv[2], process.argv[3]]);
const [day, part] = args;

console.log(run(day, part));
