import { registerPage } from "../pages/registerPage"
const registerObj = new registerPage()

import registerData from "../fixtures/registerData.json"

describe('Registration Flow',()=>{

    it('Test Automation for registration flow',()=>{


        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        registerObj.enterFirstName(registerData.firstname)
        registerObj.enterlastName(registerData.lastname)
        registerObj.enterEmail(registerData.email)
        registerObj.enterPhoneNo(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.confirmPassword(registerData.confirmpassword)
        registerObj.selectCheckbox()
        registerObj.continueButton()
    })
})

