class CreateLead
{
    get clickLead()
    {
        return $('=Leads')
    }
    get clickCreateLead()
    {
        return $('img[src="themes/softed/images/btnL3Add.gif"]')
    }
    get surName()
    {
       return $('[name="salutationtype"]')
    }
    get firstName()
    {
        return  $('[name="firstname"]')
    }
    get lastName()
    {
        return $('[name="lastname"]')
    }
    get companyName()
    {
        return $('[name="company"]')
    }
    get mobileNo()
    {
        return $('#mobile')
    }
    get description()
    {
        return  $('[name="description"]')
    }
    get saveBtn()
    {
        return $('input[title="Save [Alt+S]"]')
    }

    async createLead()
    {
        await this.clickLead.click()
        await this.clickCreateLead.click()
        await this.surName.selectByVisibleText('Mr.')
        await this.firstName.setValue("SHASHIP")
        await this.lastName.setValue("KUMARP")
        await this.companyName.setValue("Test Yantra p")
        await this.mobileNo.setValue("7063200000")
        await this.description.setValue("SHASHIP created")
        await this.saveBtn.click()

    }
}

export default new CreateLead()