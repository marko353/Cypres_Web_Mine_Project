import { HomePage } from "../page/Homepage.cy";
import { LoginPage } from "../page/LoginPage.cy";
import { AdminPage } from "../page/AdminPage.cy";
import { PimPage } from "../page/PimPage.cy";

const loginPage = new LoginPage()
const homePage = new HomePage()
const adminPage = new AdminPage()
const pimPage = new PimPage()

const admin = 'Admin';
const password = 'admin123'
const empName = 'Bob'
const lastName = 'Marly'
const phoneNumber = '123456789';
const nickName = 'Success Successfully Updated'
const name1 = 'Anthony Nolan'

describe('All Pim Page Tests', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })


    it('Add new employee', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        pimPage.openPimTab()
        pimPage.clickAddEmployee()
        pimPage.selectFirstName(empName)
        pimPage.selectLastName(lastName)
        pimPage.selectPhone(phoneNumber)
        // pimPage.clickSaveButton()
        //  pimPage.veryfyNewEmployeeAdd(employeeName)
    })
    it('Verify change Personal Details', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        pimPage.openPimTab()
        pimPage.scrollDown()
        pimPage.clickOnNewEmployee()
        pimPage.AddNickName()
        pimPage.scrollDown()
        pimPage.clickSaveButton()
        pimPage.scrolOnTop()
        pimPage.verifyToastMessage(nickName)
    })
    it('Verify titleOnReportsPage', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        pimPage.openPimTab()
        pimPage.clickOnReports()
        pimPage.verifyTitleReports()

    })
    it('Verify employeeSeach works', () => {
        loginPage.enterUserName(admin)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        pimPage.openPimTab()
        pimPage.seachEmployeeField(name1)
        pimPage.scrolOnTop()
        pimPage.clickSearchEmp()
        pimPage.verifyEmpNameShown()

    })

})