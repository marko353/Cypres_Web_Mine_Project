import { PostPage } from "../page/PostPage.cy";
import { LoginPage } from "../page/LoginPage.cy";

const loginPage = new LoginPage();
const postPage = new PostPage();
const admin = 'kminchelle';
const password = '0lelplR';
const titleText = '9 Easy Steps to Create Text Posts on Instagram';
const postText = 'Do you want to post text on Instagram without using any images? You can easily write a text-only post using Instagram Create mode. While Create Mode is only available when creating a new Story, you can also use it to create text posts for your regular Instagram feed in addition to sharing it to your Story or sending it to friends.';
const newCard = '.sc-hLclGa.bsFOWl';

describe('All Posts Tests', function () {
  beforeEach(function () {
    cy.visit('https://react-blog-code-test-vladan.vercel.app/auth/login');
  });
  it('verifyThatUserCanCreateNewPost', () => {
    loginPage.enterUserName(admin);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    postPage.enterTitleText(titleText);
    postPage.enterPostText(postText);
    postPage.clickOnPostButton();
    postPage.scrollToNewPost();
    cy.wait(2000);
    cy.get(newCard, { timeout: 10000 }).should('be.visible');



  });
  it('verifyThatTextIsDisplayedThreeDots', () => {
    loginPage.enterUserName(admin);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    postPage.enterTitleText(titleText);
    postPage.enterPostText(postText);
    postPage.clickOnPostButton();
    cy.wait(2000);
    postPage.scrollToNewPost();
    cy.wait(3000);
    postPage.verifyThreeDots();

  });

  it('verifyThatTexIsVisibleInTitleField', () => {
    loginPage.enterUserName(admin);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    postPage.enterTitleText(titleText);
    postPage.verifyThatTitleTexIsVisible(titleText);
  });

  it('verifyThatTextIsVisibleInPostField', () => {
    loginPage.enterUserName(admin);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    postPage.enterPostText(postText);
    postPage.verifyThatPostTexIsVisible(postText);

  });
  it('verifyThatLikeButtonDoesNotExistOnNewCard', () => {
    loginPage.enterUserName(admin);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    postPage.enterTitleText(titleText);
    postPage.enterPostText(postText);
    postPage.clickOnPostButton();
    postPage.scrollToNewPost();
    cy.wait(2000);
    postPage.likeButtonAssort();

  });
  it('verifyThaTextRemainsInInputFieldAfterCreatingPost', () => {
    loginPage.enterUserName(admin);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    postPage.enterTitleText(titleText);
    postPage.enterPostText(postText);
    postPage.clickOnPostButton();
    postPage.verifyThatTitleTexIsVisible(titleText);
    postPage.verifyThatPostTexIsVisible(postText);
    
  });
  it('verifyThatVisualErrorWhichSignalsMandatoryFieldForTitleIsNotDisplayed', () => {
    loginPage.enterUserName(admin);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
    postPage.enterPostText(postText);
    postPage.clickOnPostButton();
    postPage.verifyThatErrorMeesageIsNotVisible();
  });



});
