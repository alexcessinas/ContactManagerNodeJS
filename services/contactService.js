const fs = require("fs");
const path = require("path");

exports.contactService = {

    getContact(){
        const packagePath = path.resolve('./db', "contacts.json");
        return JSON.parse(fs.readFileSync(packagePath));
    }

}