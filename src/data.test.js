import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn();

    // logger.mockImplementationOnce(() => {});
    // use mockImplementation or mockImplementationOnce to replace the original mock function
    // if you just want to do so for one of the it tests.

    generateReportData(logger);
    // this creates an empty function and tests if the logger is called.
    // because the function above runs the logger function inside the function

    expect(logger).toBeCalled();
  })
});