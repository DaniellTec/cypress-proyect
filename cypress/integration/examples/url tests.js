describe('Browser actions', () => {
    it('Should load correct url', () =>{
       cy.visit('https://www.cypress.io/', {timeout:10000})
       //Goes to the URL
    })

    it('Checking correct URL', () => {
        cy.url().should('include', 'cypress')
        //Confirms the content of the URL
    })

    it('Checking elements on the page', () => {
        cy.get('button').should('be.visible')
        //Checks elements
    })

    it('Checking elements on the page', () => {
        cy.get('h3').should('be.visible')
         //Checks elements
    
    })

    it('Checking elements on the page', () => {
        cy.get('h6').should('be.visible')
         //Checks elements
    })

    it('Wait for 3 seconds', () => {
        cy.wait(3000)
    
    })

    //it('It pauses the execution', () => {
        //cy.pause()
    
    //})

})

describe('Browser actions', () => {
    it('It should go to the Product page ', () =>{
        cy.visit('https://lugg.com/cities', { timeout:10000 })
        cy.url().should('include', 'cities') 
    
    })

    it('It should click on Cities ', () =>{
        cy.get('div')
            .contains('Atlanta')
            .click()
        cy.get('div').contains('Atlanta')    
    })

})