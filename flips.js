import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
args['number'];

var results = [];

const flips = args.number || 1;

results = coinFlips(flips);
console.log(results);
console.log(countFlips(results));