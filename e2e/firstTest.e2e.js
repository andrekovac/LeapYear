describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should start with the Welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
    await expect(element(by.text('Enter any year'))).not.toBeVisible();
  });

  it('should show Home screen after tap on start button', async () => {
    await element(by.id('start_button')).tap();
    await expect(element(by.text('Enter any year'))).toBeVisible();
    await expect(element(by.text('????'))).toBeVisible();
  });
});
