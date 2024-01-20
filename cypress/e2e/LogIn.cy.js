describe('Log In Test', ()=>{
    it('Negative Test - Empty Username', ()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("div[class='panel header'] li[data-label='or'] a").click()
        cy.xpath("//fieldset[@class='fieldset login']//input[@id='pass']").type('apple_11235')
        cy.get("fieldset[class='fieldset login'] div[class='primary'] span").click()

        let expMessage = 'This is a required field.'
        cy.get('#email-error').then((x)=>{
            let actMessage = x.text();
            assert.equal(expMessage, actMessage);
        })
    })

    it('Negative Test - Empty password', ()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("div[class='panel header'] li[data-label='or'] a").click()
        cy.get('#email').type('isawang11@gmail.com')
        cy.get("fieldset[class='fieldset login'] div[class='primary'] span").click()

        let expMessage = 'This is a required field.'
        cy.get('#pass-error').then((x)=>{
            let actMessage = x.text();
            assert.equal(expMessage, actMessage);
        })

    })

    it('Negative Test - wrong username', ()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("div[class='panel header'] li[data-label='or'] a").click()
        cy.get('#email').type('isawong@gmail.com')
        cy.xpath("//fieldset[@class='fieldset login']//input[@id='pass']").type('apple_11235')
        cy.get("fieldset[class='fieldset login'] div[class='primary'] span").click()

        let expMessage = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
        cy.get('.message-error > div').then((x)=>{
            let actMessage = x.text();
            assert.equal(expMessage, actMessage);
        })
    })


    it('Negative Test - wrong password', ()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("div[class='panel header'] li[data-label='or'] a").click()
        cy.get('#email').type('isawang11@gmail.com')
        cy.xpath("//fieldset[@class='fieldset login']//input[@id='pass']").type('apple11235')
        cy.get("fieldset[class='fieldset login'] div[class='primary'] span").click()

        let expMessage = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
        cy.get('.message-error > div').then((x)=>{
            let actMessage = x.text();
            assert.equal(expMessage, actMessage);
        })
    })



    it('Positive Test', ()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("div[class='panel header'] li[data-label='or'] a").click()
        cy.get('#email').type('isawang15@gmail.com')
        cy.xpath("//fieldset[@class='fieldset login']//input[@id='pass']").type('apple_11235')
        cy.get("fieldset[class='fieldset login'] div[class='primary'] span").click()
        cy.wait(3000)
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
    })


    it('Password Reset', ()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("div[class='panel header'] li[data-label='or'] a").click()
        cy.get("a[class='action remind'] span").click()
        cy.get("#email_address").type('isawang15@gmail.com')
        cy.get("#captcha_user_forgotpassword").type('')
    })
})