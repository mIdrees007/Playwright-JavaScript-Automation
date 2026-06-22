const {test, expect} = require("@playwright/test")

const data = JSON.parse(JSON.stringify(require("../testdata.json")))

test("Drop down", async ({ page }) =>
    {
        await page.goto("https://freelance-learn-automation.vercel.app/login")
        await page.waitForLoadState("networkidle")
        await page.getByPlaceholder("Enter Email").fill(data.address.country)
        await page.getByPlaceholder("Enter Password").fill(data.password)
        
        
    }

    )