/// <reference types="cypress" />

describe('Teste para inclusão de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar adição de um novo contato', () => {
        cy.get('[type="text"]').type('Kethyllen')
        cy.get('[type="email"]').type('kethyllen@teste.com')
        cy.get('[type="tel"]').type('11 12345678')

        cy.get('.adicionar').click() 

        cy.get('h2').contains('4')
    })
})
