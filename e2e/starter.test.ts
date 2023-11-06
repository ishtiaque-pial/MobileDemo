import {by, device, element, expect} from 'detox';

describe('staring e2e testing', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have signup screen', async () => {
    await expect(element(by.id('Sign In'))).toBeVisible();
  });

  it('should show company listing after sign in', async () => {
    await element(by.id('sign_up_button')).tap();
    await expect(element(by.text('Stamp Free'))).toBeVisible();
  });

  it('should show company details after sign in', async () => {
    await element(by.text('Stamp Free')).tap();
    //await expect(element(by.text('Stamp Free'))).toBeVisible();
  });

  it('should show sign in after sign out', async () => {
    await element(by.id('sign_out_button')).tap();
    await expect(element(by.id('Sign In'))).toBeVisible();
    //await expect(element(by.text('Stamp Free'))).toBeVisible();
  });
});
