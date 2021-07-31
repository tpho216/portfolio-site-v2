/*

 */
var fs = require('fs');
var path = require('path');
var copy = function (from, to) {
    try {
        fs.accessSync(from, fs.constnats.R_OK);
        fs.accessSync(to, fs.constnats.R_OK | fs.constants.W_OK);
        var fileContent = fs.ReadFileSync(from);
        console.log("File content: ", fileContent);
        fs.writeFileSync(to, fileContent);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
};
var args = process.argv.slice(2);

if (args.length !== 1) {
    throw new Error("Error. Expected 2 parameters");
}
