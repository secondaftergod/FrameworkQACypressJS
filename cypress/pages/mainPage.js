import { assert } from 'chai'
import BasePage from './basePage.js'

export default class MainPage extends BasePage {

    constructor() {
        super()
    }
    buy_page_title=".title"
    items_name="div[class*='inventory_item_name']"

    get_title(){
        return cy.get(this.buy_page_title)
    }
    get_items(){
        var item =cy.get(this.items_name)
        return item[0]
        
    }
}
