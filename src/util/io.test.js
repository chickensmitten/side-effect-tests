import { it, expect } from "vitest";
import writeData from "./io";

it("should execute the writeFile method", () => {
  const testData = "test";
  const testFilename = "test.txt";
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // using the toBeUndefined because if the test is rejected, it wouldn't resolve.
  // and writing in files returns undefined.
  // this test is a problem because it really writes data. there are side effects.
});