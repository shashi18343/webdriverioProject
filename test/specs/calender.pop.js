import  calenderPage from '../pageobjectmodel/calender.page.js'

describe("To operate different calender popup",async ()=>{
beforeEach("OpenApp", async()=>{
    await browser.maximizeWindow();
    await browser.url("https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker");
})

    it("first type calender popup",async ()=>{

    await calenderPage.clickOnSimpleDateTab();
    await (await browser.$('#datepicker')).setValue("02/24/2023")

    })

    xit("first type calender popup",async ()=>{

       await calenderPage.clickOndropdownDatPicker(); 

    })

    xit("first type calender popup",async ()=>{

        await calenderPage.clickOniconTriger();
        

    })
})