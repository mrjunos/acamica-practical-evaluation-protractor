import { DemoPageUI } from './DemoPageUI'
import { browser } from 'protractor'

export class DemoPageServices {

    private demoPageUi: DemoPageUI

    constructor() {
        this.demoPageUi = new DemoPageUI()
    }

    get() {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.facebook.com/')
    }

    writeEmail(email: string) {
        this.demoPageUi.sampleTextBox1.sendKeys(email)
    }

    writePass(pass: string) {
        this.demoPageUi.sampleTextBox2.sendKeys(pass)
    }

    clickOnEnter() {
        this.demoPageUi.sampleButton1.click()
    }

}