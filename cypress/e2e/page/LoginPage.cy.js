export class LoginPage {

    username_box = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_box = 'input[type="password"]'
    login_button = '.oxd-button'
    errorMassage = '.oxd-alert-content'
    titleText = '.oxd-topbar-header-breadcrumb > .oxd-text'
    errormassage = '.oxd-alert-content > .oxd-text'
    userdropdown = '.oxd-userdropdown-tab > .oxd-icon'
    logoutButton = ':nth-child(4) > .oxd-userdropdown-link'
    visibleTitle = '.oxd-text--h5'
    requaredMass = ':nth-child(2) > .oxd-input-group > .oxd-text'
    forgotPasswordButton = '.orangehrm-login-forgot > .oxd-text'
    resetPasswordButton = '.oxd-button--secondary'
    forgotPassField = '.oxd-input'
    resetPasswordButton1 = '.oxd-button--secondary'
    successfullyResetText = '.oxd-text--h6'

    enterUserName(username) {
        cy.get(this.username_box).type(username)
    }


    enterPassword(password) {
        cy.get(this.password_box).type(password)
    }
    wrongPassword(password) {
        cy.get(this.password_box).type(password)

    }

    clickLogin() {
        cy.get(this.login_button).click()
    }
    assortTitlt(title) {
        cy.get(this.titleText).should('contain', 'Dashboard')
    }
    assortWrongPassword() {
        cy.get(this.errormassage)
        .should('be.visible', 'Invalid credentials')
    }
    logOut() {
        cy.get(this.userdropdown).click()
        cy.get(this.logoutButton).click()
        cy.get(this.visibleTitle).should('be.visible', 'Login')
    }
    requiredMassageshow() {
        cy.get(this.requaredMass).should('contain', 'Required')
    }
    forgotPassword() {
        cy.get(this.forgotPasswordButton).click()
        cy.get(this.resetPasswordButton).click()
        cy.get(this.forgotPassField).type('Admin')
        cy.get(this.resetPasswordButton1).click()
        cy.get(this.successfullyResetText).should('contain', 'Reset Password link sent successfully')
    }
}
