/// <reference types="cypress" />

describe('My First Test Suite',function()
{
    it('My Second Test case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       //get is used to get the locator where as in selenium it is used to navigate to url
       cy.get('.search-keyword').type('ca')
        cy.wait(2000)
      

      cy.get('.products').as('ProductLocator') //aliasing so that we can store in one variable and we can reuse it.
       cy.get('@ProductLocator').find('.product').eq(1).contains('ADD TO CART').click()//clicking based on index
        cy.get('@ProductLocator').find('.product').each(($el, index, $list)=>{

           const veggiename= $el.find('h4.product-name').text()
           if(veggiename.includes('Cashews'))
           {
            cy.wrap($el).find('button').click()
           }
            
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
         })
})