class SuccessPage
{
getDeliveryLocationAutoSuggestive()
{
    return cy.get('#country')
}
getAutoSuggestiveOption()
{
   return cy.get('.suggestions > ul > li > a')
}
getCheckBox()
{
   return  cy.get('#checkbox2')
}
getPurchaseButton()
{
    return cy.get('.ng-untouched > .btn')
}
getSuccessMessage()
{
    return cy.get('.alert')
}
}
export default SuccessPage