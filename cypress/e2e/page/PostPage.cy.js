export class PostPage {
    titleField = '[data-testid="title"]';
    postField = '.sc-jrkPcm';
    postButton = '.sc-bcPKhP';
    likeButton = '#root > div > div > div:nth-child(8) > div > div > svg';
    errorMessage = 'The title field is required';
    enterTitleText(titleText) {
        cy.get(this.titleField, { timeout: 10000 }).type(titleText);
    }

    verifyThatTitleTexIsVisible(titleText) {
        cy.get(this.titleField).should('have.value', titleText);
    }

    enterPostText(postText) {
        cy.get(this.postField).type(postText);
    }

    verifyThatPostTexIsVisible(postText) {
        cy.get(this.postField).should('have.value', postText);
    }

    clickOnPostButton() {
        cy.get(this.postButton).click();
    }

    scrollToNewPost() {
        cy.scrollTo('bottom');
    }

    verifyThreeDots() {
        const postSelector = '.sc-iBAaJG.jMFGFp';
    
        cy.get(postSelector).should('be.visible');
        cy.get(postSelector)
            .invoke('text') 
            .should('match', /...$/);
  
    }
    likeButtonAssort() {
        cy.get(this.likeButton).should('not.exist');
    }
    verifyThatErrorMeesageIsNotVisible() {
        cy.get('body').should('not.contain', this.errorMessage);
    }
   
}