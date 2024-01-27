
export class navigationPage{
    whatsNewPage(){
        cy.contains("What's New").click()
    }
    womenPage(){
        cy.contains('Women').click()
    }

    menPage(){
        cy.contains('Men').click();
        cy.get('a.nav-sections-item-switch', { timeout: 10000 }).should('be.visible').click();
    }
    

    gearPage(){
        cy.contains('Gear').click()

    }

    trainingPage(){
        cy.contains('Training').click()

    }

    salePage(){
        cy.contains('Sale').click()
    }

}

export const navigateTo = new navigationPage()