class SignInPage {

    getEmailOrMobileField() {
        return cy.get('[type="email"]');
    }

    getContinueButton() {
        return cy.get('#continue');
    }

    getErrorMessage() {
        return cy.get('#auth-error-message-box h4');
    }

    getErrorMessageDetails() {
        return cy.get('#auth-error-message-box span');
    }

    typeToEmailOrMobileField(text) {
        this.getEmailOrMobileField().type(text);
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }

    verifyErrorMessage(text){
        this.getErrorMessage().should('have.text', text);
    }

    verifyErrorMessageDetails(text){
        this.getErrorMessageDetails().should('contain.text', text);
    }

}
    
export default new SignInPage();