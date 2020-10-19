import { by, device, expect, element } from "detox";

describe("Input", () => {
  beforeAll(async () => {
    await device.reloadReactNative();
  });

  it("should get to the home screen", async () => {
    await element(by.id("start_button")).tap();
    await expect(element(by.text("Enter any year"))).toBeVisible();
  });

  const typedYear = "2000";
  it("should show the typed year at the top", async () => {
    await element(by.id("text_input")).typeText(typedYear);

    await expect(element(by.id("result_text"))).toHaveText(typedYear);
  });

  it("should remain at a four digit number when more digits are typed", async () => {
    await element(by.id("text_input")).typeText("000");

    await expect(element(by.id("result_text"))).toHaveText(typedYear);
  });

  it("should show zero if no year is present in the input", async () => {
    await element(by.id("text_input")).clearText();

    await expect(element(by.id("result_text"))).toHaveText("0");
  });
});
