/// <reference types="cypress" />
import HomePage from '../../support/Page Objects/HomePage'
import ProductPage from '../../support/Page Objects/ProductPage'
import CheckoutPage from '../../support/Page Objects/CheckoutPage'
import SuccessPage from '../../support/Page Objects/SuccessPage'
import cypress from 'cypress'
describe('My First Test Suite',function()
{

    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })


    })

    it('My first Test case',function()
    {
        const homepage=new HomePage()
        const productpage=new ProductPage()
       const checkoutpage=new CheckoutPage()
       const successpage=new SuccessPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
       homepage.getNameTextBox().type(this.data.name)
       homepage.getGender().select(this.data.gender)
       homepage.getTwowayBindData().should('have.value',this.data.name)
       homepage.getNameTextBox().should('have.attr','minlength',2)
       homepage.getEntrepreneurRadioBtn().should('be.disabled')


       homepage.getShopTab().click()
      
      //  cy.selectProduct(this.data.productName)   //Utility created in Support command.js
      this.data.productName.forEach(function(element)
      { 
        cy.selectProduct(element)
    })
    productpage.getCheckOutButton().click()
   
    var sum=0
    checkoutpage.getProductPrice().each(($el, index, $list)=>{
     const price=$el.text()
     var prodprice=price.split(" ")
     prodprice=prodprice[1].trim()
     sum=Number(sum)+Number(prodprice)


    }).then(function()
    {
        cy.log(sum)
    })
   checkoutpage.getTotalPrice().then(function(element){
        const totalprice=element.text()
        var total=totalprice.split(" ")
        total=total[1].trim()
        expect(Number(total)).to.equal(sum)
    })


       
    checkoutpage.getCheckoutButton().click()
    
    successpage.getDeliveryLocationAutoSuggestive().type('India')
    cy.wait(10000)
    successpage.getAutoSuggestiveOption().click()
    
    successpage.getCheckBox().click({force:true})
    successpage.getPurchaseButton().click()
    successpage.getSuccessMessage().then(function(element){
const actualtext=element.text()
expect(actualtext.includes('Success')).to.be.true
    })
    })
})