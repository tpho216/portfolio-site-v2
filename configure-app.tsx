/*
Author: Peter Ho
Description: Configuration file to hide keys from public
 */

const fs = require('fs');

const copy = (from, to) => {
    try {
        fs.accessSync(from, fs.constants.R_OK);
        fs.accessSync(to, fs.constants.R_OK | fs.constants.W_OK);

        const fileContent = fs.readFileSync(from);
        console.log("File content: ", fileContent);
        fs.writeFileSync(to, fileContent);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}
const args = process.argv.slice(2);

if (args.length !== 1) {
    throw new Error("Error. Expected 2 parameters")
}

const destination = args[0];

if (destination !== 'develop') {
    throw new Error("Error. Please specify parameter configuration: develop");
}

var site_uri = "";
if (destination === 'develop') {
    site_uri = "swams-develop"
} else if (destination === 'staging') {
    site_uri = "swams-staging"
}

// prepare firebase.json file depending on env config
var firebase_dict = {
    "hosting": {
        "public": "build",
        "site": "tpho-dev",
        "ignore": [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
        ],
        "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
        ]
    }
}


var firebase_dict_str = JSON.stringify(firebase_dict, null, "\t");
fs.writeFile("firebase.json", firebase_dict_str,
    (err, result) => {
        if (err) {
            console.log('error: ',err);
        }
});

fs.open(".env", 'w',
    (err, result) => {
        if (err) {
            console.log('error: ', err)
        }
});


const appEnv = `.env.${destination}-keys`;
//const funcCredentials = `credentials.${destination}.json` not using Cloud Functions yet

copy(appEnv, '.env')
