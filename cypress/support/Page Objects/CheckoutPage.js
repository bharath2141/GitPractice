class CheckoutPage
{
getCheckoutButton()
{
   return cy.get(':nth-child(5) > :nth-child(5) > .btn')
}
getProductPrice()
{
    return cy.get('tr td:nth-child(4) strong')
}

getTotalPrice()
{
    return  cy.get('h3 strong')
}
}
export default CheckoutPage