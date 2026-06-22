const {test, espect} = require('@playwright/test')

test("Mouse Hover Valid Login", async ({ page }) => 
    {
        await page.goto("https://freelance-learn-automation.vercel.app/login")
        await page.waitForTimeout(1000)

        await page.getByPlaceholder("Enter Email").fill("admin@email.com")
        await page.getByPlaceholder("Enter Password").fill("admin@123")
        await page.getByRole("button", {name:"Sign in"}).click()

        await page.waitForTimeout(1000)
        await page.getByText("Manage").first().hover()
        await page.waitForTimeout(1000)


        await page.getByAltText("manage course").click()
        await page.waitForTimeout(1000)
})