/// <reference types="cypress"/>
import {Given, And, Then} from "cypress-cucumber-preprocessor/steps"
import { config } from "cypress/types/bluebird"

const url = "https://www.google.com"

Given("I vist google", ()=>{
    cy.visit(url)
})

Given("I search {string} in google", (searchKey)=>{
    //:visible is used to identify only visible elements in the page
    // cy.fixture("example").as("testData")
    // cy.get("@testData").then((testData) =>{
    //     cy.get("[name='q']:visible").type(testData.name+"\n")
    // })

    const data = "P77123456"
    cy.log("Print complete data : "+data)
    const split1 = data.charAt(0);
    const splitDocNum = data.split(split1);
    const docNum = splitDocNum[1].split(",").toString();
    cy.log(split1)
    cy.log(splitDocNum)
    cy.log(docNum)

    //cy.log(split1+split3)

    cy.get("[name='q']:visible").type(docNum)
  
    //To hit ENTER
    cy.get("[name='q']:visible").type("{enter}")
})

// function getTestData(){
//     cy.fixture('example').then((userdata) =>{
//         //cy.log(userdata.name)
//         const uName = userdata.name
//         cy.log(userdata.email)
//         cy.log(userdata.body)
//     }).as('tData')
// }

beforeEach(function(){
    cy.fixture('example').then((userdata)=>{
        //cy.log(userdata.name)
        //const uName = userdata.name
        this.userdata = userdata
        // cy.log(this.userdata.name)
        // cy.log(userdata.email)
        // cy.log(userdata.body)
    })
})

before(function(){
    cy.fixture('example').then(function(data){
        this.data=data
    })
})