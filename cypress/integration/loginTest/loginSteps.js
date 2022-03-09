import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pages/loginPage';
const loginPage = new LoginPage();


Given('I navigate to the login page', () => {
    loginPage.navigate('');
});

And('Provide the username {string} and password {string}', (user_login,user_password) => {
    loginPage.fillLoginCredentials(user_login,user_password)
});

Then('Provide the username {string} and password {string}', (user_login,user_password) => {
    loginPage.fillLoginCredentials(user_login,user_password)
});
And('Provide the username {string} and empty password',(user_login)=> {
    loginPage.loginField(user_login)
    loginPage.submit(loginPage.submitButton)
});

And('Provide the password {string} and empty username',(user_password)=> {
    loginPage.passwordField(user_password)
    loginPage.submit(loginPage.submitButton)
});

Then('I should see {string} displayed as the page title', (pageTitle) => {
    loginPage.getPageTitle().should('eq', pageTitle)
});

And('And Provide the username {string}', (user_login,user_password=None) => {
    loginPage.fillLoginCredentials(user_login,user_password)
});

Then('Login is failed with invlid username and password,message {string}', (message) => {
    loginPage.getAlertMessage().should('contain.text', message)
});
