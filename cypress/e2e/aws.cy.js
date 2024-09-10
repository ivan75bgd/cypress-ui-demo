import homePage from "../support/pages/home-page"
import signInPage from "../support/pages/sign-in-page"
import registerPage from "../support/pages/register-page"

describe('AWS Demo Test Cases', () => {

  it('[AWS-44] Sign-In with Invalid Mobile Phone Number', () => {
    cy.visit('/');
    homePage.clickSignIn();
    signInPage.typeToEmailOrMobileField('123123123');
    signInPage.clickContinueButton();
    signInPage.verifyErrorMessage('Incorrect phone number');
    signInPage.verifyErrorMessageDetails('We cannot find an account with that mobile number');
  });

  it('[AWS-35] Sign-In with Unregistered Email', () => {
    cy.visit('/');
    homePage.clickSignIn();
    signInPage.typeToEmailOrMobileField('newEmail1234@newemail.com');
    signInPage.clickContinueButton();
    signInPage.verifyErrorMessage('There was a problem');
    signInPage.verifyErrorMessageDetails('We cannot find an account with that email address');
  });

  it('[AWS-4] Registration with Incorrect email', () => {
    cy.visit('/');
    homePage.clickStartHereLink();
    registerPage.typeToYourNameField('Ivan Stojanovic');
    registerPage.typeToMobileNumberOrEmailField('incorrectemail');
    registerPage.typeToPasswordField('123123');
    registerPage.typeToReEnterPasswordField('123123');
    registerPage.clickVerifyEmailButton();
    registerPage.verifyWrongEmailErrorMessage('Wrong or Invalid email address or mobile phone number. Please correct and try again.');
  });

});