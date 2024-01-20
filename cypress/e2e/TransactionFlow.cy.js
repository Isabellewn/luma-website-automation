describe('Make A Transaction', ()=>{
    before('Login', ()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("div[class='panel header'] li[data-label='or'] a").click()
        cy.get('#email').type('isawang15@gmail.com')
        cy.xpath("//fieldset[@class='fieldset login']//input[@id='pass']").type('apple_11235')
        cy.get("fieldset[class='fieldset login'] div[class='primary'] span").click()
        cy.wait(2000)
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
    })

    it('Navigate and add to cart', ()=>{
        //Navigate from home page to mens jacket page
        cy.get('a[id="ui-id-5"] span[class="ui-menu-icon ui-icon ui-icon-carat-1-e"]').trigger('mouseover')
        cy.get('#ui-id-17').trigger('mouseover')
        cy.get('a[id="ui-id-19"] span').click()
        cy.wait(3000)
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')

        //Locate the 1st item, Add to cart
        cy.xpath("//a[@class='product-item-link'][normalize-space()='Proteus Fitness Jackshirt']").click()

        cy.get('#option-label-size-143-item-167').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button > span').click()
        cy.wait(2000)

        //Check cart
        cy.get('.counter-number').click()
        cy.get('#top-cart-btn-checkout').click()
   
    })

    it('Fill in Shipping Info', ()=>{

    })

    it('Make payment', ()=>{

    })


})