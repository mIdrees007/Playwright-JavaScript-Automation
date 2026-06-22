const {test, expect}  = require('@playwright/test')


test("Handle Multiple tabs", async ({ browser }) =>

{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const  [newPage] = await Promise.all ([
        context.waitForEvent("page"),
        page.locator('a[href="https://www.facebook.com/groups/256655817858291"]').nth(0).click()



    ])

    await newPage.waitForTimeout(3000)

    await newPage.getByLabel('Email address or phone number').nth(0).type("idrees2020@namal.edu.pk")
    
    //await newPage.waitForTimeout(3000)

    await newPage.close()

    await page.getByPlaceholder("Enter Email").fill("Idreespersonal0011@gmail.com")

    //await page.waitForTimeout(3000)
}
)