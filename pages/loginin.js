
const {expect} = require('@playwright/test')


class LoginPage 
{
    constructor(page)
    {
        this.page = page
        this.header = page.getByText('Sign in')
        this.user_name  = "#email1"
        this.password = "//input[@placeholder='Enter Password']"
        this.loginbutton = "//button[text()='Sign in']"

    }

    async logintapplication(user_name, password) 
    {
        await this.page.fill(this.user_name, user_name)

        await this.page.fill(this.password, password)

        await this.page.click(this.loginbutton)
        
    }

    async verifyloginpage() 
    {
        await expect(this.header.first()).toBeVisible()
    }
}

module.exports = LoginPage;