import { BasePageUI } from './BasePageUI'
import { browser } from 'protractor'

export class BasePageServices {

    private basePageUI: BasePageUI

    constructor() {
        this.basePageUI = new BasePageUI()
    }

}