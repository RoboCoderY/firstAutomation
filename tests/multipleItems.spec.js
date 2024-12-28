const {test,expect} = require('@playwright/test')

// test('multilink', async({page})=>{
//     await page.goto("https://www.demoblaze.com/index.html")
//     const links = await page.$$('a');
//     for(const link of links){
//         const linktext = await link.textContent()
//         console.log(linktext)
//     }
    
// })
test('products', async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    // add this line to wait for the specific selector to get loaded
    page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a");
    for(const product of products){
        const productTitle = await product.textContent()
       console.log(productTitle);
       
    }
    
})