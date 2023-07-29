import { LoginPage } from "../page/LoginPage.cy"

const loginPage = new LoginPage();

const admin = 'Admin';
const password = 'admin123'
const title = 'Dashboard'
const wrongPassword = 'wrongpassword'

describe('All Login Tests', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })


    it('successful login', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin();
        loginPage.assortTitlt(title)

    })
    it('unSuccessful login', () => {
        loginPage.enterUserName(admin)
        loginPage.wrongPassword(wrongPassword)
        loginPage.clickLogin()
        loginPage.assortWrongPassword()

    })
    it('successful logOut', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        loginPage.logOut()
    })
    it('login empty fields', () => {
        loginPage.clickLogin()
        loginPage.requiredMassageshow()
    })
    it('reset password successfuiiy', () => {
        loginPage.forgotPassword()
    })

})
