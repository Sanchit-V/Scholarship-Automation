describe('Scholarship Platform', ()=>{

    beforeEach( () =>{
        cy.visit('http://localhost:3000/')
//     cy.clock()
// cy.tick(100)

})

    // // it('Should change the Language',() =>{
    //     cy.get('[data-test-id="select-language"]').click()
    //     cy.get('[data-test-id="li-en-US-language"]').click()
    //     //cy.get('[data-test-id="li-es-ES-language"]').click()
    //     })

    // it('Should switch to English',()=>{
        
    // })

    it('Login Page Process',()=>{
        cy.get('[data-test-id="select-language"]').click()
        cy.get('[data-test-id="li-en-US-language"]').click()
        cy.get('[data-test-id="input-login-access-code"]').type('f8c7d79')
        cy.get('[data-test-id="btn-handle-acess-code-visibility-login"]').click()
       cy.get('[data-test-id="btn-submit-login"]').click()
      
        cy.get('[data-test-id="text-welcome-message"]').should('contain.text', 'Welcome to the online scholarship application form')
        
    
    cy.get('[data-test-id="btn-get-started-welcome"]').click()

    cy.get('[data-test-id="select-display-personal-document-type"]').click()
    //cy.get('[data-test-id="li-personal-document-type-National identity card"]').click()
    //cy.get('[data-test-id="li-personal-document-type-Passport"]').click()
    //cy.get('[data-test-id="li-personal-document-type-Foreigner's identity card"]').click()
    //cy.get('[data-test-id="li-personal-document-type-RUC"]').click()
    cy.get('[data-test-id="li-personal-document-type-Other"]').click()

    cy.get('[data-test-id="input-personal-document-number"]').type('1563636611')

    cy.get('[data-test-id="select-display-personal-marital-status"]').click()

    //cy.get('[data-test-id="li-personal-marital-status-Married"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Single"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Divorced"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Widowed"]').click()
    cy.get('[data-test-id="li-personal-marital-status-Separated"]').click()


    cy.get('[data-test-id="input-personal-profession"]').type('Custom Input')

    cy.get('[data-test-id="date-picker-input-personal-birth-date"').type('1230 2024')

    //cy.get('[data-testid="CalendarIcon"]').click()
    //cy.get('[div[id=":rg:-grid-label"]]').invoke('text')
    
    // cy.get('[data-testid="ArrowLeftIcon"]').click()
    //cy.get('.react-datepicker__day--016').click()
    //cy.get('input[placeholder="MM/DD/YYY').should('have.values', '01/15/2000')
    // cy.intercept('GET', 'api/calendar-dates').as('getCalenderDates)')
    // cy.get('[data-testid="CalendarIcon"]').click()
    // cy.wait('@getCalendarDates')

    cy.get('[data-test-id="autocomplete-personal-birth-country"]').click().type('Ind',{delay:200})
    cy.get('#combo-box-demo-listbox') // Change this selector to match your autocomplete options
 // Ensure there are options
  .then($options => {
    // Example: Select the first occurrence of the option with text 'Option Text'
    const optionToSelect = "India";
    const option = $options.filter((index, el) => Cypress.$(el).text().includes(optionToSelect));
    // Click the desired option
    cy.wrap(option).click();
  });
  
})
})







       


    
