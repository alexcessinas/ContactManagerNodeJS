const fs = require("fs");
const path = require("path");

exports.contactService = {

    getContact(){
        const packagePath = path.resolve('./db', "contacts.json");
        return JSON.parse(fs.readFileSync(packagePath));
    },

    addContact(obj){
        const packagePath = path.resolve("./db", "contacts.json");
        const arrayObject = JSON.parse(fs.readFileSync(packagePath));
        var object = {
          id: arrayObject.length + 1,
          name: obj.name,
          firstName: obj.firstName,
          number: obj.number,
        };
        arrayObject.push(object);
        fs.writeFileSync(packagePath, JSON.stringify(arrayObject, null, "\t"));
    }

}