const dotenv = require('dotenv');
if(process.env.environment == "test") {
    dotenv.config({path: "./test.env"});
} else {
    dotenv.config({path: "./dev.env"});
}

const checkApiHealth = require("./tests/apiHealth");

checkApiHealth();