import { LoginPage } from "../page/LoginPage.cy"

const loginPage = new LoginPage();

const admin = 'kminchelle';
const password = '0lelplR';
const postUrl = 'https://react-blog-code-test-vladan.vercel.app/posts';
const wrongAdmin = 'admintest';
const wrongPassword = 'Test123!';
const loginUrl = 'https://react-blog-code-test-vladan.vercel.app/auth/login';

describe('All Login Tests', function () {
    beforeEach(function () {
        cy.visit('https://react-blog-code-test-vladan.vercel.app/auth/login')

    });


    it('verifySuccessfulLogin', () => {
        loginPage.enterUserName(admin);
        loginPage.enterPassword(password);
        loginPage.clickLogin();
        loginPage.assortUrl(postUrl);
        loginPage.verifyPostButtonVisible();
    });
    it('verifyUnSuccessfulLogin', () => {
        loginPage.enterUserName(wrongAdmin);
        loginPage.enterPassword(wrongPassword);
        loginPage.clickLogin();
        loginPage.assortUrl(loginUrl);
        loginPage.verifyLoginButtonVisible();
    });
});