const request = require("request");

const url = process.env.API_ROOT + "/health";

function checkApiHealth() {

    request(url, function (error, response, body) {
       if(error || response.statusCode !== 200) {
           // TODO
       }
       console.log(body)
    });

}

module.exports = checkApiHealth;