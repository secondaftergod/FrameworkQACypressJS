import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import MainPage from '../../pages/mainPage';
import LoginPage from '../../pages/loginPage';
import { expect } from "chai";
const mainPage = new MainPage();
const loginPage = new LoginPage();

Then('I should see {string} displayed as the page title', (pageTitle) => {
    mainPage.get_title().should('contain.text', pageTitle)
});
Given('I navigate to the login page', () => {
    loginPage.navigate('');
});
Then('Provide the username {string} and password {string}', (user_login,user_password) => {
    loginPage.fillLoginCredentials(user_login,user_password)
});
Then('I should see all items',() =>{
    mainPage.get_items()
    


});