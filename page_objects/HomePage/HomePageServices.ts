import { BasePageServices } from '../BasePage/BasePageServices';
import { HomePageUI } from './HomePageUI'
import { browser } from 'protractor'

export class HomePageServices extends BasePageServices {

    private homePageUi: HomePageUI

    constructor() {
        super()
        this.homePageUi = new HomePageUI()
    }

    get() {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.room77.com/#/')
    }

    writePlace(place: string) {
        this.homePageUi.autoCompleteInput.sendKeys(place)
    }

}