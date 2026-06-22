const {test, expect} = require('@playwright/test')
test ("Handle Frames", async ({ page })=>
{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    const frame_locator = page.frameLocator('frame[name="packageListFrame"]')

    await frame_locator.getByRole('link', {name:'java.applet'}).click()

    await page.pause()

})