import { HomePageServices } from '../page_objects/HomePage/HomePageServices'

describe('HomePage Login', () => {

    it('User should be able to type a place', () => {

        let homePageServices = new HomePageServices()
        homePageServices.get();
        homePageServices.writePlace("Argentina");
        
    })
    
})