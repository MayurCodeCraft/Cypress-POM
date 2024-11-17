export class registerPage{

    weblocators={
        firstname:'input[name="firstname"]',
        lastname:'input[name="lastname"]',
        email:'input[name="email"]',
        telephone:'input[name="telephone"]',
        password:'input[name="password"]',
        confirmPassword:'input[name="confirm"]',
        policyCheckbox:'input[type="checkbox"]',
        continue:'input[type="submit"]'
    }

    enterFirstName(fname){

        cy.get(this.weblocators.firstname).type(fname)
    }

    enterlastName(lname){

        cy.get(this.weblocators.lastname).type(lname)
    }

    enterEmail(emailid){

        cy.get(this.weblocators.email).type(emailid)
    }

    enterPhoneNo(phoneNo){

        cy.get(this.weblocators.telephone).type(phoneNo)
    }

    enterPassword(password){

        cy.get(this.weblocators.password).type(password)

    }

    confirmPassword(confirmPassword){

        cy.get(this.weblocators.confirmPassword).type(confirmPassword)
        
    }

    selectCheckbox(){

           cy.get(this.weblocators.policyCheckbox).check()
    }

    continueButton(){

       cy.get(this.weblocators.continue).click()
    }
}