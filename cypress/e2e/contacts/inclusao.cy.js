/// <reference types="cypress" />

describe('Teste para inclusão de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar adição de um novo contato', () => {
        cy.get('[type="text"]').type('Ana')
        cy.get('[type="email"]').type('ana@teste.com')
        cy.get('[type="tel"]').type('11 123456789')
        cy.get('.adicionar').click() 
    })
})
