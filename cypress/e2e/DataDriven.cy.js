describe('DataDriven Test', ()=>{

    let userData;
    before(()=>{
        cy.fixture('MensJacket.json').then((data)=>{
            userData = data;
        })
    })
    
    it('Mens Jacket', ()=>{
        cy.visit("https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html")
        userData.forEach((eachData)=>{
            cy.xpath(`//a[normalize-space()="${eachData.product}"]`).click()
            cy.xpath(`//span[contains(text(), ${eachData.expectedPrice})]`)
            
            cy.get(`div[option-label="${eachData.availableColor[0]}"]`)
            cy.get(`div[option-label="${eachData.availableColor[1]}"]`)
            cy.get(`div[option-label="${eachData.availableColor[2]}"]`)
               
            cy.go('back')

        })

    })
})
