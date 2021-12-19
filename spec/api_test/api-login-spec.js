// Importing chai assertion library
const { expect } = require('chai');
// Importing api page object in order to use the 'login' helper
const LoginApi = require('../../api/login/login-api');
// Importing login credentials
const data = require('../../data/credentials.json');

// Our 'describe' statement (test suite) consists of individual 'it' statements (test cases)$
describe('Login Page', async function () {
  this.timeout(250000);

  it('should be able to login, verify status code and receive an authentication token', async function () {
    // Passing valid login credentials
    const login = await LoginApi.login(data.validLogin.username, data.validLogin.password)

    // Verifying HTTP status code
    expect(login.status).to.equal(200)
    // Verifying HTTP status text
    expect(login.statusText).to.equal('OK')
    // Verifying that our token is a string
    expect(typeof login.data.token).to.equal('string');
    // Verifying that our token is precisely 20 characters long
    expect(login.data.token).to.have.lengthOf(20);
  })

  it('should not be able to login, verify status code', async function () {
    // Passing invalid login credentials
    const login = await LoginApi.login(data.invalidLogin.username, data.invalidLogin.password)

    // Verifying HTTP status code
    expect(login.status).to.equal(401);
    // Verifying HTTP status text
    expect(login.statusText).to.equal('Unauthorized');
    // Verifying the error message
    expect(login.data.error).to.equal('Invalid username or password. Please try again.');
  })
});