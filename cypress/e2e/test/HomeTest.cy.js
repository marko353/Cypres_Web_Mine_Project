import { HomePage } from "../page/Homepage.cy";
import { LoginPage } from "../page/LoginPage.cy";

const loginPage = new LoginPage()
const homePage = new HomePage()
const admin = 'Admin';
const password = 'admin123';
const tabName = 'Directory'
const searchText = 'Directory'


describe('All Home Page Tests', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })


    it('clock visable', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        homePage.visibleClock()
    })
    it('employee image visible', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        homePage.userImgVisible()
    })
    it('brand banner visible', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        homePage.bannerbrand()

    })
    it('menu main button work', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        homePage.menuButton()

    })

})