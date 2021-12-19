"use strict";

class LoginPage extends Page {
	get fldUsername() { return $('userNameFieldLocator'); }
	get fldPassword() { return $('passwordFieldLocator'); }
	get fldSignUpUsername() { return $('signUpUserNameLocator'); }
	get fldSignUpPassword() { return $('signUpPasswordLocator'); }
	get fldSignUpPhoneNumber() { return $('signUpPhoneNumberLocator'); }
    get btnSignin() { return $('signInLocator'); }
	get btnSignup() { return $('signUpLocator'); }
    get btnConfirmSignup() { return $('signUpConfirmLocator'); }
	get btnForgetPassword() { return $('forgetPassLocator'); }
}
module.exports = new LoginPage();