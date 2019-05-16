import { DemoPageServices } from '../page_objects/DemoPage/DemoPageServices'

describe('DemoPage Login', () => {

    it('User should be able to log in', () => {

        let demoPageServices = new DemoPageServices()
        demoPageServices.get();
        demoPageServices.writeEmail("example@email.com");
        demoPageServices.writePass("examplePassword123");
        demoPageServices.clickOnEnter();
        
    })
    
})