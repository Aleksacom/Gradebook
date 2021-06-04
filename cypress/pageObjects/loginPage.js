class AuthLogin {
    
    get email() {
        return cy.get('input[id="email"]')
    }

    get password() {
        return cy.get('input[id="userPassword"]')
    }

    get submitButton() {
        return cy.get('button[type="submit"]')
   
   
    }
    
    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.submitButton.click()
    }
}

export const authLogin = new AuthLogin()