class login{
    get username()
    {
        return $('input[type="text"]')
    }
    get password()
    {
        return $('input[type="password"]')
    }
    get loginBtn()
    {
        return $('input[type="submit"]')
    }


   async login()
    {
      await  browser.maximizeWindow()
      browser.pause(1000)
      await  browser.url('http://testingserver:8888/');
      browser.pause(1000)
await this.username.setValue('admin')
browser.pause(1000)
await this.password.setValue('admin')
browser.pause(1000)
await this.loginBtn.click()
    }
}

export default new login()