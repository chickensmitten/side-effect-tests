// this file replaces fs function. 
// mock folder name __mock__ is not negotiable.

import { vi } from "vitest";

export const promises = { 
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
      // this resolves to nothing like the vi.mock("fs") in io.test.js
      // the point is to show that vi will use fs in mock folder first
      // else it will use the vi.mock("fs") in io.test.js
    });
  })
}