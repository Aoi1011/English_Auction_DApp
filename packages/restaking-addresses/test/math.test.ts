import { expect } from "chai";
import { add, multiply } from "../src/math";

describe("Math Library", () => {
    it("should add two numbers correctly", () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it("should multiply two numbers correctly", () => {
        const result = multiply(2, 3);
        expect(result).to.equal(6);
    });
});
