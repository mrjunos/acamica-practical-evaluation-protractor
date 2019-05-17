import { BasePageUI } from '../BasePage/BasePageUI';
import { $ } from 'protractor'

export class HomePageUI extends BasePageUI {

    public autoCompleteInput = $("input#autocomplete")

}