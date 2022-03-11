import { assert } from 'chai'
import BasePage from './basePage.js'

export default class MainPage extends BasePage {

    constructor() {
        super()
    }
    buy_page_title=".title"
    items_name="div[class*='inventory_item_name']"
    item_buttons="div[class='pricebar']>button"
    basket_in="span[class='shopping_cart_badge']"
    sort_box="[class='product_sort_container']"
    item_list=[]
    list=[]
    get_title(){
        return cy.get(this.buy_page_title)
    }
    get_items(){
        return cy.get(this.items_name)
        
    }
    check_item_buttons(){
        cy.get(this.item_buttons)
        .should('be.visible')
        return cy.get(this.item_buttons)
    }
    check_items_in_basket(howmany){
        return cy.get(this.basket_in).should('contain.text',parseInt(howmany))
    }
    get_items_name(){
        
        for(var i=0;i<6;i++){
           this.item_list.push(cy.get(this.items_name).innerText)
        
        }
    }
}
