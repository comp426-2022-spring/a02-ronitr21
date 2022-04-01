import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const guess = args["call"];

if (guess == null)
{
    console.log("Error: no input.\nUsage: node guess-flip.js --call=[heads|tails]");
}
else if (!(guess == 'heads' || guess == 'tails'))
{
    console.log("Error: incorrect input.\nUsage: node guess-flip.js --call=[heads|tails]");
}
else
{
    console.log(flipACoin(guess));
}