describe('Scholarship Platform', ()=>{

    beforeEach( () =>{


        cy.visit('localhost:3000')
         
     //cy.clock()
 //cy.tick(100)

})


const n = 0; // n = 1 for english      // n = 0 for spanish 

//Will need to update the code manually in individual code(if or else) each time for whole process. 

it('Login Page Process',()=>{


    if (n == 1){
        
        
        
        
            cy.get('[data-test-id="select-language"]').click()
            cy.get('[data-test-id="li-en-US-language"]').click()
            //cy.get('[data-test-id="li-es-ES-language"]').click()
            cy.get('[data-test-id="input-login-access-code"]').type('bcf90d3')
            cy.get('[data-test-id="btn-handle-acess-code-visibility-login"]').click()
           cy.get('[data-test-id="btn-submit-login"]').click()

           cy.wait(2000)
        


           
            cy.get('[data-test-id="text-welcome-message"]').should('contain.text', 'Welcome to the online scholarship application form')
            //cy.get('[data-test-id="text-welcome-message"]').should('contain.text', 'Bienvenido al formulario de solicitud de beca online')
            //cy.get('#notistack-snackbar > .MuiTypography-root').should('contain.text', 'El solicitante inició sesión')
            cy.get('#notistack-snackbar > .MuiTypography-root').should('contain.text', 'Login successful')
            cy.get('[data-test-id="btn-get-started-welcome"]').click()
          

          cy.get('[data-test-id="select-display-personal-document-type"]').click()
    //cy.get('[data-test-id="li-personal-document-type-National identity card"]').click()
    //cy.get('[data-test-id="li-personal-document-type-Passport"]').click()
    //cy.get('[data-test-id="li-personal-document-type-Foreigner's identity card"]').click()
    //cy.get('[data-test-id="li-personal-document-type-RUC"]').click()
    //cy.get('[ data-test-id="text-Applicant-Logged-in"]').should('contains.text', 'Applicant logged in')
      cy.get('[data-test-id="li-personal-document-type-Other"]').click()

    cy.get('[data-test-id="input-personal-document-number"]').clear().type('1563636611')

    cy.get('[data-test-id="select-display-personal-marital-status"]').click()

    //cy.get('[data-test-id="li-personal-marital-status-Married"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Single"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Divorced"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Widowed"]').click()
    cy.get('[data-test-id="li-personal-marital-status-Separated"]').click()


    cy.get('[data-test-id="input-personal-profession"]').clear().type('Custom Input')

    cy.get('[data-test-id="date-picker-input-personal-birth-date"').type('1230 2001')
    //cy.get('[data-test-id="date-picker-input-personal-birth-date"').type('3012 2001')

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

  cy.get('[data-test-id="autocomplete-input-personal-birth-state"]').click().type('Chand',{delay:200})
    cy.get('#combo-box-demo-listbox') // Change this selector to match your autocomplete options
 // Ensure there are options
  .then($options => {
    // Example: Select the first occurrence of the option with text 'Option Text'
    const optionToSelect = "Chandigarh";
    const option = $options.filter((index, el) => Cypress.$(el).text().includes(optionToSelect));
    // Click the desired option
    cy.wrap(option).click();
  });

  cy.get('[data-test-id="autocomplete-input-personal-birth-city"]').click().type('Chand',{delay:200})
    cy.get('#combo-box-demo-listbox') // Change this selector to match your autocomplete options
 // Ensure there are options
  .then($options => {
    // Example: Select the first occurrence of the option with text 'Option Text'
    const optionToSelect = "Chandigarh";
    const option = $options.filter((index, el) => Cypress.$(el).text().includes(optionToSelect));
    // Click the desired option
    cy.wrap(option).click();
  });

  cy.get('[data-test-id="autocomplete-input-personal-birth-nationality"]').click().type('Ind',{delay:200})
    cy.get('#combo-box-demo-listbox') // Change this selector to match your autocomplete options
 // Ensure there are options
  .then($options => {
    // Example: Select the first occurrence of the option with text 'Option Text'
    const optionToSelect = "India";
    const option = $options.filter((index, el) => Cypress.$(el).text().includes(optionToSelect));
    // Click the desired option
    cy.wrap(option).click();
  });

cy.get('[data-test-id="input-personal-monthly-income"]').type('300000')

cy.get('[data-test-id="input-personal-monthly-expense"]').type('3000')

//cy.get('[data-test-id="radio-input-personal-financially-dependent"]').check('true')
cy.get('[data-test-id="radio-input-personal-financially-dependent-YES"]').check()
//cy.get('[data-test-id="radio-input-personal-financially-dependent-NO"]').check()

cy.get('[data-test-id="radio-input-personal-has-children-YES"]').check()

{cy.get('[data-test-id="input-personal-age-range-0-4"]').type('2')
  cy.get('[data-test-id="input-personal-age-range-5-12"]').type('1')
  cy.get('[data-test-id="input-personal-age-range-13-18"]').type('4')
  cy.get('[data-test-id="input-personal-age-range-+18"]').type('6')

}

//cy.get('[data-test-id="radio-input-personal-has-children-NO"]').check()
  
//cy.get('[data-test-id="radio-input-personal-has-children"]').check('false')

cy.get('[data-test-id="btn-continue-personal"]').click()

cy.get('[data-test-id="text-perosalDetailsSavedSucess"]').should('contains.text', 'Your personal details have been saved successfully.')
//cy.get('[data-test-id="text-perosalDetailsSavedSucess"]').should('contains.text', 'Sus datos personales se han guardado con éxito.')







    
    }


else{

     {
        cy.get('[data-test-id="select-language"]').click()
        //cy.get('[data-test-id="li-en-US-language"]').click()
        cy.get('[data-test-id="li-es-ES-language"]').click()
        cy.get('[data-test-id="input-login-access-code"]').type('81e17bc')
        
        cy.get('[data-test-id="btn-handle-acess-code-visibility-login"]').click()
       cy.get('[data-test-id="btn-submit-login"]').click()
    }

    {
        cy.get('[data-test-id="text-welcome-message"]').should('contain.text', 'Bienvenido al formulario de solicitud de beca online')
        cy.get('#notistack-snackbar > .MuiTypography-root').should('contain.text', 'Inicio de sesión correcto')
        //cy.get('#notistack-snackbar > .MuiTypography-root').should('contain.text', 'Applicant logged in')
        cy.get('[data-test-id="btn-get-started-welcome"]').click()
    }

    {
        cy.get('[data-test-id="select-display-personal-document-type"]').click()
    //cy.get('[data-test-id="li-personal-document-type-National identity card"]').click()
    //cy.get('[data-test-id="li-personal-document-type-Passport"]').click()
    //cy.get('[data-test-id="li-personal-document-type-Foreigner's identity card"]').click()
    //cy.get('[data-test-id="li-personal-document-type-RUC"]').click()
    //cy.get('[ data-test-id="text-Applicant-Logged-in"]').should('contains.text', 'Applicant logged in')
    cy.get('[data-test-id="li-personal-document-type-Other"]').click()

    cy.get('[data-test-id="input-personal-document-number"]').type('1563636611')

    cy.get('[data-test-id="select-display-personal-marital-status"]').click()

    //cy.get('[data-test-id="li-personal-marital-status-Married"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Single"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Divorced"]').click()
    //cy.get('[data-test-id="li-personal-marital-status-Widowed"]').click()
    cy.get('[data-test-id="li-personal-marital-status-Separated"]').click()


    cy.get('[data-test-id="input-personal-profession"]').type('Custom Input')

    //cy.get('[data-test-id="date-picker-input-personal-birth-date"').type('1230 2001')
    cy.get('[data-test-id="date-picker-input-personal-birth-date"').type('3012 2001')

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

  cy.get('[data-test-id="autocomplete-input-personal-birth-state"]').click().type('Chand',{delay:200})
    cy.get('#combo-box-demo-listbox') // Change this selector to match your autocomplete options
 // Ensure there are options
  .then($options => {
    // Example: Select the first occurrence of the option with text 'Option Text'
    const optionToSelect = "Chandigarh";
    const option = $options.filter((index, el) => Cypress.$(el).text().includes(optionToSelect));
    // Click the desired option
    cy.wrap(option).click();
  });

  cy.get('[data-test-id="autocomplete-input-personal-birth-city"]').click().type('Chand',{delay:200})
    cy.get('#combo-box-demo-listbox') // Change this selector to match your autocomplete options
 // Ensure there are options
  .then($options => {
    // Example: Select the first occurrence of the option with text 'Option Text'
    const optionToSelect = "Chandigarh";
    const option = $options.filter((index, el) => Cypress.$(el).text().includes(optionToSelect));
    // Click the desired option
    cy.wrap(option).click();
  });

  cy.get('[data-test-id="autocomplete-input-personal-birth-nationality"]').click().type('Ind',{delay:200})
    cy.get('#combo-box-demo-listbox') // Change this selector to match your autocomplete options
 // Ensure there are options
  .then($options => {
    // Example: Select the first occurrence of the option with text 'Option Text'
    const optionToSelect = "India";
    const option = $options.filter((index, el) => Cypress.$(el).text().includes(optionToSelect));
    // Click the desired option
    cy.wrap(option).click();
  });

cy.get('[data-test-id="input-personal-monthly-income"]').type('300000')

cy.get('[data-test-id="input-personal-monthly-expense"]').type('3000')

//cy.get('[data-test-id="radio-input-personal-financially-dependent"]').check('true')
cy.get('[data-test-id="radio-input-personal-financially-dependent-SI"]').check()
//cy.get('[data-test-id="radio-input-personal-financially-dependent-NO"]').check()

cy.get('[data-test-id="radio-input-personal-has-children-SI"]').check()
{
  cy.get('[data-test-id="input-personal-age-range-0-4"]').type('2')
  cy.get('[data-test-id="input-personal-age-range-5-12"]').type('1')
  cy.get('[data-test-id="input-personal-age-range-13-18"]').type('7')
  cy.get('[data-test-id="input-personal-age-range-+18"]').type('5')

}
cy.get('[data-test-id="radio-input-personal-has-children-NO"]').check()
  
//cy.get('[data-test-id="radio-input-personal-has-children"]').check('false')

cy.get('[data-test-id="btn-continue-personal"]').click()


cy.get('[data-test-id="text-perosalDetailsSavedSucess"]').should('contains.text', 'Sus datos personales se han guardado con éxito.')



    }



}

})



})