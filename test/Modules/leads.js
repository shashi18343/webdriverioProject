import loginPage from '../pageobjectmodel/loginPage.js'
import createleadpage from '../pageobjectmodel/createleadpage.js'

describe('My Login application', async () => {
    it('should login with valid credentials', async () => {
       await browser.pause(1000)
        await loginPage.login()
       await browser.pause(10000)
       await createleadpage.createLead()
       await browser.pause(10000)
    
    })
})
