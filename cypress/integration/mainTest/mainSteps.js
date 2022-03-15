import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import MainPage from '../../pages/mainPage';
import LoginPage from '../../pages/loginPage';
import { expect } from "chai";
import { assert } from "chai";
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
And('I should see all {string} items',(items) =>{
    mainPage.get_items().should(($p) => {
        expect($p).to.have.length(parseInt(items))
})});

And('Check all {string} is visible buttons',(buttons) =>{
    mainPage.check_item_buttons().should(($p) => {
        expect($p).to.have.length(parseInt(buttons))
})});
Then('Click buy all items on page',() => {
    mainPage.check_item_buttons().then(($el) => {
        $el.click()})
});
And('Check {string} items in basket',(howmany)=>{
    mainPage.check_items_in_basket(howmany)
});
And('Click remove all items on page',() => {
    mainPage.check_item_buttons().then(($el) => {
        $el.click()})
});
Then('Check {string} remove buttons',(buttons) =>{
    mainPage.check_item_buttons().should(($p) => {
        expect($p).to.have.length(parseInt(buttons))
})});
Then('Check items in basket after delete',()=>{
    cy.get(mainPage.basket_in).should('not.exist')
});
Then('Check items A-Z',() => {
    cy.get('select').select('Name (A to Z)')
    mainPage.get_items_name_sortA_Z()
    });
    
 Then('Check items Z-A',() => {
    cy.get('select').select('Name (Z to A)')
    mainPage.get_items_name_sortZ_A()
    }); 

Then('Check price Low-High',() => {
    cy.get('select').select('Price (low to high)')
    mainPage.get_items_price_sortLow_High()
    
    });   
Then('Check price High-Low',() => {
    cy.get('select').select('Price (high to low)')
    mainPage.get_items_price_sortHigh_Low()
    
    });   