/// <reference types="cypress" />

describe('My First Test Suite',function()
{
    it('My Third Test case',function()
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

        cy.get('.table-display tr td:nth-child(2)').each(($el, index, $list)=>{
      
            const Coursename=$el.text()
            if(Coursename.includes('Python'))
            {
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const pricetext=price.text()
                   expect(pricetext).to.equal('25')
                })
            }
      
        })

      })
})
