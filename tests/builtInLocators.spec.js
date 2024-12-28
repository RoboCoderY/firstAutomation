const {test,expect} = require('@playwright/test')

test('builtInLocators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()
    const userName = await page.getByPlaceholder('Username').fill("Admin")
    const userPassword = await page.getByPlaceholder('Password').fill("admin123")
    const signIn = await page.getByRole('button',{type:'submit'}).click();
    await expect( await page.getByText('manda user')).toBeVisible()
})  