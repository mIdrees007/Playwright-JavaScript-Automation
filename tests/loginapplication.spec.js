
const {test, expect} = require('@playwright/test')

const LoginPage = require("../pages/loginin.js")
const homepage = require("../pages/homepage.js")

test ("Login in to Application:" , async ({ page }) => 
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const  loginpage = new LoginPage(page)
    await loginpage.logintapplication("admin@email.com", "admin@123")

    const homePage = new homepage(page)

    await homePage.verifymanageoption()
    await homePage.logouttoapplication()
    await loginpage.verifyloginpage()
})