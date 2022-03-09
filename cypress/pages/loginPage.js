import BasePage from './basePage.js'

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }
    
    username     = "#user-name";
    password     = "#password";
    alertMessage = ".error";
    submitButton = "#login-button";

    loginField(user_login){
        let field = cy.get(this.username);
        field.clear();
        field.type(user_login);
    }
    passwordField(user_password){
        let field = cy.get(this.password);
        field.clear();
        field.type(user_password);
        
    }
    fillLoginCredentials(user_login,user_password) {
        this.loginField(user_login)
        this.passwordField(user_password)
        this.submit(this.submitButton)
    }

    getAlertMessage() {
        return cy.get(this.alertMessage)
    }

    submit(buttonId) {
        const button = cy.get(buttonId);
        button.click();
    }

}
