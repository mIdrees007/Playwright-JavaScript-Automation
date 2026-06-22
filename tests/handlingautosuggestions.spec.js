const  {test, expect} = require('@playwright/test')
const { it } = require('node:test')

test.skip("Auto Suggestions using keyboard", async ({ page }) => 
{
    await page.goto("https://google.com")
    await page.locator(".gLFyf").type("Babar Azam")

    await page.waitForSelector(".sbct.PZPZlf")

    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")

}
)

test.only("Auto Suggestions", async ({ page }) => 
{
    await page.goto("https://google.com")
    await page.locator(".gLFyf").type("Imran Khan")

    await page.waitForSelector(".sbct.PZPZlf")

    const allsugesstions = await page.$$(".sbct.PZPZlf")

    for (let i =0; i<allsugesstions.length; i++)
    {
        const item = await allsugesstions[i].textContent()
        
        if (item.includes("pic"))
        {
            await allsugesstions[i].click()
            break

        }

    }

}
)