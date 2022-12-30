/// <reference types="cypress" />

describe('My First Test Suite',function()
{
    it('My Third Test case',function()
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
 //to open the link using href attribute of the web Element and hitting the URL in the same page

 cy.get('#opentab').then(function(e){
    const url= e.prop('href')
    cy.log(url)
    cy.visit(url)  //it won't work bcoz cypress wont support to open other domains but it supports sub-domains
 })
    })
})