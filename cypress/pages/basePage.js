export default class BasePage {

    baseUrl       = "https://www.saucedemo.com/";
    navigate(path) {
        cy
            .visit(this.baseUrl + path)
            
    }

    getPageTitle() {
        return cy.title()
    }

}
