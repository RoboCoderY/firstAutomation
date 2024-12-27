// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test' 

test('', async({page})=>{

    await page.goto('https:www.demoblaze.com/index.html')
    // await page.locator('#login2').click()
    await page.click("#login2")
    await page.locator("id=loginusername").fill("pavanol");
    await page.fill("input[id='loginpassword']","test@123")
    await page.click("//button[normalize-space()='Log in']")
    const logOutBtn = await page.locator('id=logout2')
    await expect(logOutBtn).toBeVisible();
    await page.close()
})  

