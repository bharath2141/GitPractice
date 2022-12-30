/// <reference types="cypress" />

describe('My First Test Suite',function()
{
    it('My Third Test case',function()
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
        
        //to handle mouseover elements and showing it
        cy.get('.mouse-hover-content').invoke('show') // this method is used to show invisible elements 
       cy.contains('Top').click()
      // cy.contains('Top').click({force: true}) //this step is used to directly click on invisible elements
        cy.url().should('include','top')

       
      
    })
})