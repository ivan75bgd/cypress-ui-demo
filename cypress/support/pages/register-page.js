class RegisterPage {

    getYourNameField() {
        return cy.get('#ap_customer_name');
    }
    
    getMobileNumberOrEmailField() {
        return cy.get('#ap_email');
    }

    getPasswordField() {
        return cy.get('#ap_password');
    }
    
    getReEnterPasswordField() {
        return cy.get('#ap_password_check');
    }

    getVerifyEmailButton() {
        return cy.get('#continue');
    }

    getWrongEmailErrorMessage() {
        return cy.get('#auth-email-invalid-claim-alert .a-alert-content');
    }
    
    typeToYourNameField(text){
        this.getYourNameField().type(text);
    }

    typeToMobileNumberOrEmailField(text){
        this.getMobileNumberOrEmailField().type(text);
    }

    typeToPasswordField(text){
        this.getPasswordField().type(text);
    }

    typeToReEnterPasswordField(text){
        this.getReEnterPasswordField().type(text);
    }

    clickVerifyEmailButton(){
        this.getVerifyEmailButton().click();
    }

    verifyWrongEmailErrorMessage(text){
        this.getWrongEmailErrorMessage().should('contain.text', text);
    }

}
    
export default new RegisterPage();