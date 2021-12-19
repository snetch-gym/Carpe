# Carpe
### Installation
These instruction will get you a copy of the project up and runing on your local machine

````
> git clone https://github.com/snetch-gym/Carpe.git

> npm i - to install modules
> npx wdio wdio.conf.js --spec spec/api_test/api-login-spec.js - to run the api-login test and get the results
> npx wdio wdio.conf.js --spec spec/ui_test/ui-login-spec.js - to run the ui-login test and get the results

However those tests would fail, cause I use fake/unrunable url and locators ( since requirement was to write your own test using hypothetical elements)

````

### Architecture
1. Top level - our test file contains all of the assertions for the test and helper methods from the API classes
2. Lower level - API classes contain helper methods that utilize our lowest level abstraction - client
3. Lowest Level - Client that wraps up GET, POST, PUT, DELETE methods