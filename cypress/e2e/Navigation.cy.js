import { navigateTo } from "../support/page_objects/navigationPage"

describe('Test page navigation', ()=>{
    beforeEach('open indext page', ()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
    })
    it('verify navigation across the page',()=>{
        navigateTo.whatsNewPage()
        navigateTo.womenPage()
        navigateTo.menPage()
        navigateTo.gearPage()
        navigateTo.trainingPage()
        navigateTo.salePage()
        

    })
})