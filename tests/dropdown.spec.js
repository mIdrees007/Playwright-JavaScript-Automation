const {test, expect} = require("@playwright/test")

test("Drop down", async ({ page }) =>
    {
        await page.goto("https://freelance-learn-automation.vercel.app/signup")
        /*
        prefernces:
        label
        value
        index
        */

        await page.locator("#state").selectOption({label:"Goa"})

        //await page.waitForTimeout(1000)

        await page.locator("#state").selectOption({value:"Himachal Pradesh"})

        //await page.waitForTimeout(1000)

        await page.locator("#state").selectOption({ index:4})

        //await page.waitForTimeout(3000)

         /* const values = await page.locator("#state").textContent()

        console.log("All dropdown values:"+ values)

        await expect(values.includes("HaveliDaman")).toBeTruthy()
        */

        const state = await page.$("#state")

        const stateOptions = await state.$$("option")

        let checkCon = false

        for (let i=0;i<stateOptions.length;i++)
            {
                let index = stateOptions[i]
                let value  = await index.textContent()
                if (value.includes("Assam"))

                {
                   checkCon = true
                    break
                }
                console.log("Drop down values using for loop:"+value)
                
               
            }

             await expect(checkCon).toBeTruthy()

        // selecting multiple hobbies

        await page.locator("#hobbies").selectOption(['Playing','Swimming'])

        await page.waitForTimeout(3000)
})