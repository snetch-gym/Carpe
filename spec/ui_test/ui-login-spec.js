const loginUrl = 'https://randomUrl.com';
const dashboardUrl = 'https://randomDashboardUrl.com';
const signUpUrl = 'https://randomSignUpUrl.com';
const timeout = 25000;
const LoginPage = require('../../page_object/login-page');
const { assert } = require('chai');


describe('Login', () => {

    it('should be able to login with correct credentials', () => {
        // Navigate to login page
        browser.url(loginUrl)

        // Type in username, password, and click login
        LoginPage.fldUsername.setValue(username);
        LoginPage.fldPassword.setValue(username);
        LoginPage.btnSignin.click();

        // Verify that user was redirected to abother page 
        browser.waitUntil(() => {
            return browser.getUrl() === dashboardUrl;
        });
    });

    it('Sign-up', () => {
        // Navigate to login page
        browser.url(loginUrl)

        // Click on Sign-Up button
        LoginPage.btnSignup.click();

        // Verify that user was redirected to Sign-up page 
        browser.waitUntil(() => {
            return browser.getUrl() === 'https:randomUrl';
        });
        LoginPage.fldSignUpUsername.setValue('username');
        LoginPage.fldSignUpPhoneNumber.setValue('123-444-1242');
    });

    it('User will not be able to Sign-up using invalid characters', () => {
        // Navigate to login page
        browser.url(loginUrl)

        // Click on Sign-Up button
        LoginPage.btnSignup.click();

        // Verify that user was redirected to Sign-up page 
        browser.waitUntil(() => {
            return browser.getUrl() === signUpUrl;
        });

        //Type in invalid characters to Sign-Up field
        LoginPage.fldSignUpUsername.setValue('user!!name>');
        LoginPage.btnConfirmSignup.click();
        
        //Verify that User was not able to Sign up using invalid characters
        let errorTxt = $('errorLocator').getText();
        assert.equal( errorTxt, 'Please use valid characters', 'User was able to Sign Up using incalid characters');
    });

    it('User will not be able to Sign-up without fill up all needed fields', () => {
        // Navigate to login page
        browser.url(loginUrl)

        // Click on Sign-Up button
        LoginPage.btnSignup.click();

        // Verify that user was redirected to Sign-up page 
        browser.waitUntil(() => {
            return browser.getUrl() === signUpUrl;
        });

        //Click on Sign Up button without filling out needed fields
        LoginPage.btnConfirmSignup.click();

        //Verify that User was not able to Sign up using invalid characters
        let errorTxt = $('errorLocator').getText();
        assert.equal( errorTxt, 'Please fill out needed fields', 'User was able to Sign Up without filling out needed fields');
    });

    it('Forget Password button redirect user to a different page', () => {
        // Navigate to login page
        browser.url(loginUrl)

        // Click on Sign-Up button
        LoginPage.btnForgetPassword.click();

        // Verify that user was redirected to another page 
        browser.waitUntil(() => {
            return browser.getUrl() === 'https:randomUrl';
        });
    });
});