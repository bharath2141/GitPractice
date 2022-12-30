class HomePage
{
getNameTextBox()
{
    return cy.get('[name="name"]:nth-child(2)')
}

getGender()
{
    return  cy.get('#exampleFormControlSelect1')
}
getTwowayBindData()
{
    return cy.get(':nth-child(4) > .ng-pristine')
}
getEntrepreneurRadioBtn()
{
   return cy.get('#inlineRadio3')
}
getShopTab()
{
    return  cy.get(':nth-child(2) > .nav-link')
}
}

export default HomePage