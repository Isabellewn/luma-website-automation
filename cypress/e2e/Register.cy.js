describe("Register", ()=>{

    //before only runs once, for multiple blocks
    let userData;
    before(()=>{
        cy.fixture('Register.json').then((data)=>{
            userData = data;
        })
    })

    let exptectInfo = "This is a required field."
    it("Negative Test - Empty Firstname", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");      
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.get('#lastname').type(userData.lastname)
        cy.get('#email_address').type(userData.email)
        cy.get('#password').type(userData.password)
        cy.get('#password-confirmation').type(userData.passwordConfirm)
        cy.get("button[title='Create an Account']").click() 
        cy.wait(2000)
        
        if(cy.get('#firstname') == ""){
            cy.get('#firstname-error').then((x)=>{
                expect(x.text()).to.include(exptectInfo)
            }) 
        }
    })
    it("Negative Test - Empty Lastname", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");      
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.get('#firstname').type(userData.firstname)
        cy.get('#email_address').type(userData.email)
        cy.get('#password').type(userData.password)
        cy.get('#password-confirmation').type(userData.passwordConfirm)
        cy.get("button[title='Create an Account']").click() 
        cy.wait(2000)
        if (cy.get('#lastname') == ""){
            cy.get('#lastname-error').then((x)=>{
                let actualInfo = x.text()
                expect(actualInfo).to.include(exptectInfo)
            }) 
        }

    })
    it("Negative Test - Empty Email", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");      
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.get('#firstname').type(userData.firstname)
        cy.get('#lastname').type(userData.lastname)
        cy.get('#password').type(userData.password)
        cy.get('#password-confirmation').type(userData.passwordConfirm)
        cy.get("button[title='Create an Account']").click() 
        cy.wait(2000)

        if (cy.get('#email_address') == ""){
            cy.get('#email_address-error').then((x)=>{
                let actualInfo = x.text()
                expect(actualInfo).to.include(exptectInfo)
            }) 
        }

    })
    it("Negative Test - Empty Password", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");      
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.get('#firstname').type(userData.firstname)
        cy.get('#lastname').type(userData.lastname)
        cy.get('#email_address').type(userData.email)
        cy.get('#password-confirmation').type(userData.passwordConfirm)
        cy.get("button[title='Create an Account']").click() 
        cy.wait(2000)

        if (cy.get('#password') == ""){
            cy.get('#password-error').then((x)=>{
                let actualInfo = x.text()
                expect(actualInfo).to.include(exptectInfo)
            }) 
        }

    })
    it("Negative Test - Empty Password-Confirmation", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");      
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.get('#firstname').type(userData.firstname)
        cy.get('#lastname').type(userData.lastname)
        cy.get('#email_address').type(userData.email)
        cy.get('#password').type(userData.password)
        cy.get("button[title='Create an Account']").click() 
        cy.wait(2000)

        if (cy.get('#password-confirmation') == ""){
            cy.get('#password-confirmation-error').then((x)=>{
                let actualInfo = x.text()
                expect(actualInfo).to.include(exptectInfo)
            }) 
        }

    })

    it("Negative Test - Invalid Email", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");      
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.get('#firstname').type(userData.firstname)
        cy.get('#firstname').type(userData.firstname)
        cy.get('#lastname').type(userData.lastname)
        cy.get('#email_address').type('jot@gmail.com')
        cy.get('#password').type(userData.password)
        cy.get("button[title='Create an Account']").click() 
        cy.wait(2000)

        let expInfo = 'Please enter a valid email address (Ex: johndoe@domain.com).'

        if (cy.get('#email_address') == ""){
            cy.get('#email_address-error').then((x)=>{
                let actualInfo = x.text()
                expect(actualInfo).to.include(expInfo)
            }) 
        }

    })


    it("Negative Test - weak password", ()=>{
        cy.get('#firstname').type(userData.firstname)
        cy.get('#firstname').type(userData.firstname)
        cy.get('#lastname').type(userData.lastname)
        cy.get('#email_address').type(userData.email)
        cy.get('#password').type('1234')
        let expInfo = 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.'
        cy.get('#password-error').then((x)=>{
            let actInfo = x.text()
            expect(actInfo).to.include(expInfo)
        }) 
    })

    it("Negative Test - password doesn't match", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.get('#firstname').type(userData.firstname)
        cy.get('#lastname').type(userData.lastname)
        cy.get('#email_address').type(userData.email)
        cy.get('#password').type(userData.password)
        cy.get('#password-confirmation').type('applle_11235')
        cy.get("button[title='Create an Account']").click() 

        let expInfo = 'Please enter the same value again.'
        cy.get('#password-confirmation-error').then((x)=>{
            let actInfo = x.text()
            expect(actInfo).to.include(expInfo)
        })   
    })


    it("Positive Test - Successfully Registered", ()=>{
        //create an account
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.get('#firstname').type(userData.firstname)
        cy.get('#lastname').type(userData.lastname)
        cy.get('#email_address').type(userData.email)
        cy.get('#password').type(userData.password)
        cy.get('#password-confirmation').type(userData.passwordConfirm)
        cy.get("button[title='Create an Account']").click() 
        cy.wait(2000)
        //validate account info
        let expName = 'Jo Terry'
        let expEmail = 'jot@gmail.com'
        cy.get('.box-information > .box-content > p').then((x)=>{
            let actContent = x.text();
            expect(actContent).to.include(expName)
            expect(actContent).to.include(expEmail)
        })

    })


})