import { by, device, expect, element } from "detox";

describe("Input", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should get to the home screen", async () => {
    // Write test here
  });

  it("should show the typed year at the top", async () => {
    // Write test here
  });

  it("should remain at a four digit number when more digits are typed", async () => {
    // Write test here
  });

  it("should show zero if no year is present in the input", async () => {
    // Write test here
  });
});
