class HomePage {

    getSignInField() {
        return cy.get('#nav-al-signin .nav-action-signin-button');
    }

    getStartHereLink() {
        return cy.get('.nav-signin-tooltip-footer .nav-a');
    }

    clickSignIn() {
        this.getSignInField().click({force:true});
    }

    clickStartHereLink() {
        this.getStartHereLink().click({force:true});
    }

}
    
export default new HomePage();