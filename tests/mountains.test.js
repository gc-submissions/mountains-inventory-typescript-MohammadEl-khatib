"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mountains_1 = require("../src/mountains");
describe("findNameOfTallestMountain", () => {
    test("middle mountain", () => {
        const name = (0, mountains_1.findNameOfTallestMountain)([
            { name: "Kilimanjaro", height: 19341 },
            { name: "Everest", height: 29029 },
            { name: "Denali", height: 20310 }
        ]);
        expect(name).toBe("Everest");
    });
    test("first mountain", () => {
        const name = (0, mountains_1.findNameOfTallestMountain)([
            { name: "Everest", height: 29029 },
            { name: "Kilimanjaro", height: 19341 },
            { name: "Denali", height: 20310 }
        ]);
        expect(name).toBe("Everest");
    });
    test("last mountain", () => {
        const name = (0, mountains_1.findNameOfTallestMountain)([
            { name: "Kilimanjaro", height: 19341 },
            { name: "Denali", height: 20310 },
            { name: "Everest", height: 29029 }
        ]);
        expect(name).toBe("Everest");
    });
});
