/// <reference types="cypress" />

describe('My First Test Suite',function()
{
    it('My First Test case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       //get is used to get the locator where as in selenium it is used to navigate to url
       cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4);
      //  parent-child relationship

      cy.get('.products').as('ProductLocator') //aliasing so that we can store in one variable and we can reuse it.
        cy.get('@ProductLocator').find('.product').eq(1).contains('ADD TO CART').click()//clicking based on index
        cy.get('@ProductLocator').find('.product').each(($el, index, $list)=>{

           const veggiename= $el.find('h4.product-name').text()
           if(veggiename.includes('Cashews'))
           {
            cy.wrap($el).find('button').click()
           }
            
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')

        //to print the logo in logs
       cy.get('.brand').then(function(logo)
       {
        cy.log(logo.text())
       })

       //cy.log(cy.get('.brand').text())    it wont work because we have to manually resolve promise as text is jquery command and promise is not resolved.
    })
})