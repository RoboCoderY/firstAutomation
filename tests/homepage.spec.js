// verify title and 

// step 1 import playwright module
// test to create the test and expect for test validation
 

const {test, expect} = require('@playwright/test')

// test case
test('HomePage', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
    const pageTitle = await page.title()
    console.log('Page title is:', pageTitle)

    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    page.close()
    // page.close()
    await page.click("")
}) 