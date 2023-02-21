describe("Create opportunities with organization and campaign",async () =>{
    it(" opp with org and camp HC", async () =>{
        browser.maximizeWindow();
        browser.url('http://testingserver:8888/');
        await  browser.$('[name="user_name"]').setValue("admin");
        await browser.$('[name="user_password"]').setValue("admin");
        (await browser.$('input#submitButton')).click();
        await expect(browser).toHaveTitle("vtiger CRM 5 - Commercial Open Source CRM");
        //console.log(await browser.getTitle());
        
      

    })
}
)