import { assert } from 'chai'
import BasePage from './basePage.js'

export default class MainPage extends BasePage {

    constructor() {
        super()
    }
    buy_page_title=".title"
    items_name="div[class*='inventory_item_name']"
    items_pirce="div[class*='inventory_item_price']"
    item_buttons="div[class='pricebar']>button"
    basket_in="span[class='shopping_cart_badge']"
    sort_box="[class='select_container']"
    items_list=[]
    items_price_list=[]

    get_title(){
        return cy.get(this.buy_page_title)
    }
    get_items(){
        return cy.get(this.items_name)
        
    }
    get_price(){
        return cy.get(this.items_pirce)
    }
    check_item_buttons(){
        cy.get(this.item_buttons)
        .should('be.visible')
        return cy.get(this.item_buttons)
    }
    check_items_in_basket(howmany){
        return cy.get(this.basket_in).should('contain.text',parseInt(howmany))
    }
    get_items_name_sortA_Z(){
        this.items_list=[]
        this.get_items().then(($els) => {
            const elements = Cypress._.map(Cypress.$.makeArray($els), 'innerText')
            for(var i in elements){
                this.items_list.push(elements[i])
            }
        assert.deepEqual(this.items_list[0],this.items_list.sort()[0])
        })
    }
    get_items_name_sortZ_A(){
        this.items_list=[]
        this.get_items().then(($els) => {
            const elements = Cypress._.map(Cypress.$.makeArray($els), 'innerText')
            for(var i in elements){
                this.items_list.push(elements[i])
            }
        assert.deepEqual(this.items_list[0],this.items_list.sort().reverse()[0])
        })
    }
    sortFloat(a,b) { return a - b; }

    get_items_price_sortLow_High(){
        this.items_price_list=[]
        this.get_price().then(($els) => {
            const elements = Cypress._.map(Cypress.$.makeArray($els), 'innerText')
            for(var i in elements){
                this.items_price_list.push(parseFloat(elements[i].replace('$','')))
            }
        
        assert.deepEqual(this.items_price_list[0],this.items_price_list.sort(this.sortFloat)[0])
        })
    }

    get_items_price_sortHigh_Low(){
        this.items_price_list=[]
        this.get_price().then(($els) => {
            const elements = Cypress._.map(Cypress.$.makeArray($els), 'innerText')
            for(var i in elements){
                this.items_price_list.push(parseFloat(elements[i].replace('$','')))
            }
        
        assert.deepEqual(this.items_price_list[0],this.items_price_list.sort(this.sortFloat).reverse()[0])
        })
    }
}
