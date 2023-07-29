export class HomePage {

    clockV = '.orangehrm-attendance-card-bar > .oxd-icon-button > .oxd-icon'
    userImg = '.oxd-userdropdown-img'
    searchField = '.oxd-input'
    bannerBrand = '.oxd-brand-banner > img'
    menuCloseButton = '.oxd-main-menu-search > .oxd-icon-button > .oxd-icon'

    visibleClock() {
        cy.get(this.clockV).should('be.visible')
    }

    userImgVisible() {
        cy.get(this.userImg).should('be.visible')
    }
    bannerbrand() {

        cy.get(this.bannerBrand).should('be.visible')
    }


    menuButton() {
        cy.get(this.menuCloseButton).click()
    }










}

