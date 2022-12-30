/// <reference types="cypress" />

describe('My First Test Suite',function()
{
    it('My Third Test case',function()
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');

        //check-boxes handling
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get("input[type='checkbox']").check(['option2','option3'])

//static dropdown handling
cy.get('#dropdown-class-example').select('option3').should('have.value','option3')

//Dynamic dropdown

cy.get('#autocomplete').type('ind')

cy.get('.ui-menu-item-wrapper').each(($el, index, $list)=>{


if($el.text()=='India')
{
cy.wrap($el).click()
}
})
cy.get('#autocomplete').should('have.value','India')

//visible invisible elements

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//radio-buttons

cy.get('[value="radio1"]').check().should('be.checked')

      })
})
