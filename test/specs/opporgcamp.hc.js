describe("Create opportunities with organization and campaign",async () =>{
    it(" opp with org and camp HC", async () =>{

        // let random=Math.floor(Math.random()* (100-1)+1);
       let random = Math.floor(Math.random()*(100-1+1)+1)
        console.log(random);

        await browser.maximizeWindow();
        await browser.url('http://testingserver:8888/');
        await  browser.$('[name="user_name"]').setValue("admin");
        await browser.$('[name="user_password"]').setValue("admin");
        await browser.$('input#submitButton').click();
        expect(browser).toHaveTitle("vtiger CRM 5 - Commercial Open Source CRM");
        console.log(await browser.getTitle());
        console.log("Login to the application");
        await browser.$("//td[@class='tabUnSelected']/a[text()='More']").moveTo()
        await browser.$("//a[@name='Campaigns']").click()
       
        console.log("---------------------------------------------creating new campaign---------------------------------------------");

        console.log("output ---------------->>>>>"+await browser.$("//td[@class='moduleName']/a[text()='Campaigns']").isDisplayed());
        await browser.$("//img[@title='Create Campaign...']").click();
       const campRan=await browser.$("//input[@name='campaignname']").setValue("Campaign"+random);
        await browser.$("//input[@name='closingdate']").clearValue();
        await browser.$("//input[@name='closingdate']").setValue("2023-02-26");
    await browser.$("//textarea[@class='detailedViewTextBox']").setValue("creating a new campaign ");
        await browser.$("(//input[@title='Save [Alt+S]'])[2]").click();
      let campRanText=await browser.$("//td[@id='mouseArea_Campaign Name']");
      campRanText.getText();
        console.log("created campaign verified ------------->>>>>>>"+expect(browser).toHaveTextContaining(campRan));

        console.log("---------------------------------------------creating new organization---------------------------------------------");

//         await browser.$("//td[@class='tabUnSelected']/a[text()='Organizations']").click();
//         await browser.$("//img[@title='Create Organization...']").click();
//          await browser.$("//input[@name='accountname']").setValue("org 2");
//          await browser.$('[name="description"]').setValue("new org created");
//         await browser.$("(//input[@title='Save [Alt+S]'])[2]").click();
//          const orgcreated=await browser.$("//span[@id='dtlview_Organization Name']");
//         expect(orgcreated).toHaveText('org 2');

//          console.log("---------------------------------------------creating new opportunities---------------------------------------------");

//          await browser.$("//a[text()='Opportunities']").click();
//          await browser.$("//img[@title='Create Opportunity...']").click();
//          await browser.$("//input[@name='potentialname']").setValue("opp 2")
//          await browser.$("(//img[@alt='Select'])[1]").click();
//          await browser.switchWindow('http://testingserver:8888/index.php?module=Accounts&action=Popup&html=Popup_picker&form=vtlibPopupView&forfield=related_to&srcmodule=Potentials&forrecord=')
       
//          await browser.$("//a[@id='1']").waitForDisplayed();
//          await browser.$("//a[@id='1']").click();
        
//         await browser.switchWindow('http://testingserver:8888/index.php?module=Potentials&action=EditView&return_action=DetailView&parenttab=Sales')
        
//        await browser.$("//input[@name='closingdate']").setValue("2023-02-26");
//        console.log("switching window***************************");
//         await browser.$("(//input[@title='Save [Alt+S]'])[1]").click();
// await browser.debug();

    })

});