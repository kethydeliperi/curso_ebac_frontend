/// <reference types="cypress" />

describe('Teste para alteração de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar edição de um contato', () => {
        cy.get('.edit').first().click()
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('novoemail@teste.com')

        cy.get('.alterar').click()

        cy.contains('gian@ebac.com.br').should('not.exist')
    })
})