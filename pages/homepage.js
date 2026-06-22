
const {expect} = require('@playwright/test')

class homepage{
    constructor(page){
        this.page = page
        this.manageoption = page.getByText('Manage')
        this.menu = page.getByAltText('menu')
        this.logout = page.getByText('Sign out')
    }

    async verifymanageoption() {
    await expect(this.manageoption.first()).toBeVisible();
}
  
    async logouttoapplication() {

        await this.menu.click();
        await this.logout.click();

    }

}
module.exports  = homepage;