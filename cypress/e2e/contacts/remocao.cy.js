/// <reference types="cypress" />

describe('Teste para remoção de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('', () => {
        cy.get('.delete').first().click()
        cy.get('h2').contains('3')
    })
})