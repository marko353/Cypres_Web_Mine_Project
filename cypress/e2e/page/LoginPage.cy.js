export class LoginPage{

    username_box = '[data-testid="username"]'
    password_box = '[data-testid="password"]'
    login_button = '.sc-bcPKhP'
    postButton = '.sc-bcPKhP';
   

    enterUserName(username) {
        cy.get(this.username_box).type(username)
    }


    enterPassword(password) {
        cy.get(this.password_box).type(password)
    }
   
    clickLogin() {
        cy.get(this.login_button).click()
    }
    assortUrl(expectedText){
        cy.url().should('include', expectedText);
    }
    verifyPostButtonVisible() {
        cy.get(this.postButton).should('be.visible');
      }
      verifyLoginButtonVisible() {
        cy.get(this.login_button).should('be.visible');
      }
 


}