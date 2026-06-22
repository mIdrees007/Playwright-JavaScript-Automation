const {test, expect}  = require('@playwright/test');

test("Verify Application Title", async ({ page }) => {
    
    await page.goto("https://google.com");
    const url = await page.url();

    console.log("Url is " + url);

    const Title = await page.title();
    console.log("Title is " + Title);

    await expect(page).toHaveTitle("Google");
     // for understanding write here 
    //await expect(page).toHaveTitle("Yahoo");
});