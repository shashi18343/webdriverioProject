import loginPage from "../pageobjectmodel/loginPage";
import crmsetting from "../pageobjectmodel/crmsetting";


describe('workflow of crmsetting', async () => {
    let random =Math.floor(Math.random() * (100-1)+1);
    it('should login with valid credentials', async () => {
    await loginPage.login("admin","admin");
});
    it('creating workflow with valid credentials', async () => {
    await crmsetting.crmWorkflow("well maintained and stable");

    });

    it("verify the created workflow",async ()=>
    {
        await crmsetting.verWorkFcreated();
    })
});
