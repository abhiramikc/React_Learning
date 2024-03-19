import { sum } from "../components/testcase1";
test("first test case for the sum", () => {
    const result = sum(3, 2);
    expect(result).toBe(5);
});
