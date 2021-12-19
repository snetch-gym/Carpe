const Client = require('../client-api')

class Login {
  // Login helper method where we pass our 'username' and 'password' that are passed through the 
  async login({username, password}) {
    // Create body for our request
    const body = {username, password};
    
    // Send a post reqeuest to login
    const response = await Client.post('/login', body);

    return response;
  }
}

// Instantiating our class
module.exports = new Login();