const dotenv = require('dotenv');
if(process.env.environment === "test") {
    dotenv.config({path: "./test.env"});
} else {
    dotenv.config({path: "./dev.env"});
}

const checkApiHealth = require("./tests/apiHealth");

const errors = require("./errors");

checkApiHealth(errors);

if(errors.hasErrors) {
    // TODO - send email
} else {
    console.log("No errors to report.")
}