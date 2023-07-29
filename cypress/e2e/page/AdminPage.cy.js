export class AdminPage {
    adminTabButton = ':nth-child(1) > .oxd-main-menu-item > .oxd-text'
    adminVisible = '.oxd-table-filter-header-title > .oxd-text'
    enterUserName = ':nth-child(2) > .oxd-input'
    searchButton = 'oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space'
    userAppeared = '.oxd-table-card > .oxd-table-row > :nth-child(2) > div'
    userButton = '.orangehrm-header-container > .oxd-button'
    nameUser = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    verifyUserName = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    jobTab = '.oxd-topbar-body-nav > ul > :nth-child(2)'
    jobTitle = ':nth-child(2) > .oxd-topbar-body-nav-tab-item'

    openAdminTab() {

        cy.get(this.adminTabButton).click()

    }
    verifyOpenAdminTab() {
        cy.get(this.adminVisible).should('be.visible', 'System Users')
    }
    searchUserName(username) {
        cy.get(this.enterUserName).type(username)

    }
    addUserButton() {
        cy.get(this.userButton).click()
    }
    addUsserName(userName) {
        cy.get(this.nameUser).type(userName)
    }

    verifyUserNameVisible(userName) {
        cy.get(this.verifyUserName)
            .should('be.visible')
            .should('have.value', userName);
    }
    clickOnJobTab() {
        cy.get(this.jobTab).click
    }
    selectJobTitles() {
        cy.get(this.jobTitle).click()
    }



}











