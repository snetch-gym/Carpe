const axios = require('axios');
const baseUrl = 'https://randomUrl.com';

class ApiClient {
  // Lowest level abstraction for api.  
  // Benifits of this abstraction:
  // Move axios to one page only - ability to replace axios easily on one page instead of replacing it in every api/page object
  // No need to duplicate baseUrl - we only pass path to concatenate it
  // Ability to have try catch in one place, instead of duplicating it in every api obejct

  async post(path, body) {
    let response;

    // Make an attempt to send post request
    try {
      response = await axios.post(baseUrl + path, body);

    }
    // If it fails, pass the error into catch as an error parameter
    catch (error) {
      // Improve readability to ease the use of error responses
      response = error.response;
    }

    return response;
  }
}

module.exports = new ApiClient();