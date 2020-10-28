it('Correct_data', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[type="text"]').type('tomsmith');
    cy.get('[type="password"]').type('SuperSecretPassword!');   
 
    cy.get ('.fa').click();
    cy.get('.flash.success').contains('You logged into a secure area').should('exist')       
})

    it('incorrect_data', () => {
        cy.get('.icon-2x.icon-signout').click();
        cy.get('.flash.success').contains('You logged out of the secure area!').should('exist')    
        
        cy.get('[type="text"]').type('Olena');
        cy.get('[type="password"]').type('Kamen');    
        })
        
it('logout', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
    cy.get ('.fa').click();
    cy.get('.flash.error').contains('Your username is invalid').should('exist');
    })


