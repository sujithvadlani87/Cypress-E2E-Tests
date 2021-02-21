describe('FirstTest Suite',function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('FirstTest Case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type(this.data.name)
        cy.server()
        cy.route({
            method : "GET",
            url:"/users"
        }).as("getAPI")
        cy.get("@getAPI").then((xhr)=>{
            xhr.res
        })
    })
})