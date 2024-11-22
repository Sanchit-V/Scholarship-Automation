export class LoginPage{
    constructor(language = 'en'){
        this.language=language
    }

    selectLanguage(){
        cy.get('[data-test-id="select-language"]').click()
        if (this.language === 'en'){
            cy.get('[data-test-id="li-en-US-language"]').click()
        }
        else
        {
            cy.get('[data-test-id="li-es-ES-language"]').click()
        }
    }

    enterAccessCode(){
        cy.get('[data-test-id="input-login-access-code"]').type(code)
        cy.get('[data-test-id="btn-handle-acess-code-visibility-login"]').click()
        cy.get('[data-test-id="btn-submit-login"]').click()

    }
}