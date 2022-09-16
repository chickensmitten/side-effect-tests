import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
// io tests uses built in fs function.
// mock fs will replace the real fs with a mock version. 
// mock can mock any built in functions or third party functions.
// mock prevents unnecessary writes to the production/staging database or runs expensive third party services

vi.mock("path", () => {
  return {
    // default export is necessary
    default: {
      join: (...args) => {
        return args[args.length - 1]
        // get last element of the array
      }
    }
  };
});

it("should execute the writeFile method", () => {
  const testData = "test";
  const testFilename = "test.txt";

  writeData(testData, testFilename)

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // using the toBeUndefined because if the test is rejected, it wouldn't resolve.
  // and writing in files returns undefined.
  // this test is a problem because it really writes data. there are side effects.

  // expect(fs.writeFile).toBeCalled();
  // when writeData function is called and function fs mocked
  // this test then checks if the fs.writeFile inside it is called

  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  // this is written with custom mock logic shown in vi.mock("path")
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "test";
  const testFilename = "test.txt";

  writeData(testData, testFilename)

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});