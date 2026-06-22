const {test, espect, expect}  = require('@playwright/test')

test ("Verify Error Message", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin")

    await page.getByPlaceholder("Password").type("admin123786")

    await page.locator("//button[@type='submit']").click()

    const erroMsg = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent()

    console.log("Error Message; " +erroMsg)

    //partially checking

    expect(erroMsg.includes("Invalid")).toBeTruthy()

    //fully checking
    expect(erroMsg==="Invalid credentials").toBeTruthy()

    
})