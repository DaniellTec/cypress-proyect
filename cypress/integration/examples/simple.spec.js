describe( 'Cypress test', () => {
    //Describe groups our tests
    it('True should be true', () => {
        expect(true).to.equal(true)
        //It creates a function
    })
    it('True should be true', () => {
        expect(true).to.equal(false)
        //It creates a function
    })
    it('7 should be 7', () => {
        expect(7).to.equal(5)
    })
    it('7 should be 7', () => {
        expect(7).to.equal(7)
    })
})

describe('Another describe block', () => {
    it('False should be false', () =>{
        expect(false).to.equal(false)
    })
})

describe('Browser actions', () => {
    it('Should load correct url', () =>{
       cy.visit('https://example.com', {timeout:10000})
    })
})

//describe('Another describe block', () => {

//})