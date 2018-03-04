const request = require("request");

const url = process.env.API_ROOT + "/health";

function checkApiHealth(errors) {

    request(url, function (error, response, body) {
       if(response.statusCode !== 200) {
           errors.addError("checkApiHealth: " + body);
           console.log(errors.errors);
       }

    });

}

module.exports = checkApiHealth;