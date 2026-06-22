const {test, expect} = require('@playwright/test')

test.use({viewport:{width:1000,height:450}})
test("Valid login", async ({ page }) =>  {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    // checkin web page widh and height
    console.log(await page.viewportSize().width)

    console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").type("Admin", {delay:200})

    await page.locator("input[name='password']").type("admin123", {delay:200})

    await page.locator("//button[@type='submit']").click()
    
    //await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    //await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/login/)

})