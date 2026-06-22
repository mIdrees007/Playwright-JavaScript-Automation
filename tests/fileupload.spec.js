const {test, expect} = require("@playwright/test")

test("check file upload", async ({ page }) => 
{
    await page.goto("https://the-internet.herokuapp.com/upload")

    //await page.locator("#file-upload").setInputFiles("C:/Users/Admin/Desktop/Athlete_System/image.png")

    await page.locator("#file-upload").setInputFiles("./uploads/Capture.PNG")

    await page.locator(".button").click()

    expect (await page.getByRole("heading", {name:"File Uploaded!"})).toBeTruthy()

    
})