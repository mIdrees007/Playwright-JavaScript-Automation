const {test, expect} = require('@playwright/test')

test.skip("Handling alert", async ({page }) =>
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (d) =>
    {
        expect(d.type()).toContain("alert")

        //expect(d.type()).toContain("confirm")
        expect(d.message()).toContain("I am a JS Alert")

        await d.accept()
    })

    await page.getByRole('button', { name: 'Click  for Js Alert' }).click();
})


test.skip("Handling confirm", async ({page }) =>
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (dialogWindow) =>
    {
        expect(dialogWindow.type()).toContain("confirm")

        //expect(d.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain("I am a JS Confirm")

        await dialogWindow.dismiss()
    })

    await page.getByRole('button', { name: 'Click  for Js Confirm' }).click();
})


test("Handling Prompt", async ({page }) =>
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (dialogWindow) =>
    {
        expect(dialogWindow.type()).toBe("prompt")

        //expect(d.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain("I am a JS prompt")

        //await dialogWindow.dismiss()

        await dialogWindow.accept("Idrees")
    })

    await page.getByRole('button', { name: 'Click  for Js Prompt' }).click();
    await page.waitForTimeout(500)
})