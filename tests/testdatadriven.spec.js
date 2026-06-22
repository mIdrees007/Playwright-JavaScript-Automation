const {test, expect}  = require('@playwright/test')
const { join } = require('node:path')
const { json } = require('node:stream/consumers')

const filedata = JSON.parse(JSON.stringify(require("../test_Data_driven.json")))

test.describe("Test Data Driven", function() 
{
    for (const data of filedata) 
    {
        test.describe(`Login Data of ${data.id}`, function() {
            test("Login Application", async({page}) => 
            {
                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.waitForLoadState("networkidle")
                await page.getByPlaceholder("Enter Email").fill(data.username)
                await page.getByPlaceholder("Enter Password").fill(data.password)
        
            })
        })
    }
})