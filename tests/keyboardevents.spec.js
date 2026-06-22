const {test, expect} = require("@playwright/test")

test("Keyboard Event", async ({page}) => 
{
    await page.goto("https://www.google.com/")

    await page.waitForTimeout(100)

    //await page.locator(".gLFyf").type("chatgbt")
    /*
    await page.waitForTimeout(100)

    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Control+V")

     await page.keyboard.press("Enter")

    await page.waitForTimeout(1000) 
    */

    await page.locator(".gLFyf").focus()
    await page.locator(".gLFyf").type("Muhammad Idrees Computer Science Graduate")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")

    for (let i=0;i<'Gradeate'.length;i++) 
    {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Enter")
})