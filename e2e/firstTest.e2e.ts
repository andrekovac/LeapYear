import { by, device, expect, element } from "detox";

describe("Welcome and Home", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should start with the Welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
    // @ts-ignore
    // .not will be typed when the following PR gets merged: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/48434
    await expect(element(by.text("Enter any year"))).not.toBeVisible();
  });

  it("should show Home screen after tap on start button", async () => {
    await element(by.id("start_button")).tap();
    await expect(element(by.text("Enter any year"))).toBeVisible();
    await expect(element(by.text("????"))).toBeVisible();
  });
});
