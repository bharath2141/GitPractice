/// <reference types="cypress" />

describe('My First Test Suite',function()
{
    it('My Third Test case',function()
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //to capture text from alert
        cy.on('window:alert',(str)=>
        {
            //assertion
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        //to capture text from confirm pop-up

        cy.on('window:confirm',(str)=>
        {
            //assertion
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })

        //to open the link in same tab
        cy.get('#opentab').invoke('removeAttr','target').click()
        
        //to get current page URL
        cy.url().should('include','rahulshettyacademy')

        //to go to previous page
        cy.go('back')

        cy.url().should('include','AutomationPractice')

       
      })
})
