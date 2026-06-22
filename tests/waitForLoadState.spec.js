const {test, expect} = require('@playwright/test')

test("Load State Wating", async ({ page }) =>
{
     await page.goto("https://freelance-learn-automation.vercel.app/login")

     await page.getByText("New user? Signup").click()

     await page.waitForLoadState("networkidle")

     const total_checkboxes = await page.getByRole("checkbox").count()

     console.log(total_checkboxes)

})