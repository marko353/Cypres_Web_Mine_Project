export class PimPage {

    openPim = ':nth-child(2) > .oxd-main-menu-item'
    addEmployee = ':nth-child(3) > .oxd-topbar-body-nav-tab-item'
    firstNameE = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    lastNameE = ':nth-child(3) > :nth-child(2) > .oxd-input'
    phoneNumberE = '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    saveButtonE = '.oxd-button--secondary'
    verifyNewE = '.orangehrm-edit-employee-name > .oxd-text'
    clickNewE = ':nth-child(7) > .oxd-table-row'
    addNick = ':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    buttonSave = ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
    tostMassage = '.oxd-toast'
    clickReports = ':nth-child(4) > .oxd-topbar-body-nav-tab-item'
    verifyTitle = '.oxd-table-filter-header-title > .oxd-text'
    searchField = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'
    searchE = 'Search'
    empNameShow = '.oxd-table-card > .oxd-table-row > :nth-child(3) > div'

    openPimTab() {
        cy.get(this.openPim).click()
    }
    clickAddEmployee() {
        cy.get(this.addEmployee).click()
    }
    selectFirstName(empName) {
        cy.get(this.firstNameE).type(empName)
    }
    selectLastName(lastName) {
        cy.get(this.lastNameE).type(lastName)
    }
    selectPhone(phoneNumber) {
        cy.get(this.phoneNumberE).clear().type(phoneNumber)
    }
    clickSaveButton() {
        cy.get(this.saveButtonE).click()
    }
    veryfyNewEmployeeAdd(employeeName) {
        cy.get(this.verifyNewE).should('contain', employeeName)
    }
    scrollDown() {
        cy.scrollTo('bottom');
    }
    clickOnNewEmployee() {
        cy.get(this.clickNewE).click()
    }
    AddNickName() {
        cy.get(this.addNick).type('Niki')
    }
    clickSaveButton() {
        cy.get(this.buttonSave).click()
    }
    scrolOnTop() {
        cy.scrollTo('top');
    }
    verifyToastMessage(message) {
        cy.get(this.tostMassage)
            .should('be.visible')

    }
    clickOnReports() {
        cy.get(this.clickReports).click()
    }
    verifyTitleReports() {
        cy.get(this.verifyTitle).should('be.visible')
    }
    seachEmployeeField(name1) {
        cy.get(this.searchField)
            .type(name1)


    }
    clickSearchEmp() {
        cy.contains(this.searchE).click()
    }
    verifyEmpNameShown() {
        cy.get(this.empNameShow).should('be.visible')
    }


}



