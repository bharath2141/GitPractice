/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'


describe('My First Test Suite',function()
{
    it('My iframe Test case',function()
    {
        cy.visit('https://kitchen.applitools.com/ingredients/iframe')
        cy.frameLoaded('#the-kitchen-table')
        cy.iframe().find('#fruits-vegetables tbody tr:nth-child(1) td:nth-child(1)').should('include','Apple')
     
    })
})