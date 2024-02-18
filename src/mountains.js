"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNameOfTallestMountain = void 0;
const mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    if (mountains.length === 0) {
        return "";
    }
    let tallestMountain = mountains[0];
    for (let mountain of mountains) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    }
    return tallestMountain.name;
}
exports.findNameOfTallestMountain = findNameOfTallestMountain;
const tallestMountainName = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);
