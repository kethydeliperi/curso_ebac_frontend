/// <reference types="cypress" />

describe('Teste para alteração de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar edição de um contato', () => {
        cy.get('.sc-eDDNvR').click()
        cy.get('.edit').click()
        cy.get('[type="text"]').type(' Silva')
        cy.get('.alterar').click()
    })
})