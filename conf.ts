import { Config } from "protractor";

export let config: Config =  {

    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    
    specs: [ './tests/*.js' ],

    framework: 'jasmine',

    allScriptsTimeout: 60000,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                //'incognito',
                //'disable-extensions'
            ]
        }
    },

    jasmineNodeOpts: {
        compiler: "ts:ts-node/register",
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    }

}