import { HomePage } from "../page/Homepage.cy";
import { LoginPage } from "../page/LoginPage.cy";
import { AdminPage } from "../page/AdminPage.cy";

const loginPage = new LoginPage()
const homePage = new HomePage()
const adminPage = new AdminPage()

const admin = 'Admin';
const password = 'admin123';
const user = 'Charlie.Carter'
const userName = 'Bob Marly'
const employee = 'Bob Marly'

describe('All Admin Page Tests', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })


    it('admin tab open', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        adminPage.openAdminTab()
        adminPage.verifyOpenAdminTab()


    })
    it('User Management, search user', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        adminPage.openAdminTab()
        adminPage.searchUserName(user)


    })
    it('Verifu that User visible', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        adminPage.openAdminTab()
        adminPage.addUserButton()
        adminPage.addUsserName(userName)
        adminPage.verifyUserNameVisible(userName)

    })
    it('Verifu that Job Title visible', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        adminPage.openAdminTab()
        adminPage.clickOnJobTab()
        adminPage.selectJobTitles()


    })
})