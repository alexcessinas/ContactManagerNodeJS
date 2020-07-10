const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

exports.contactService = {

    getContact(){
        const packagePath = path.resolve('./db', "contacts.json");
        return JSON.parse(fs.readFileSync(packagePath));
    },

    getContactById(id) {
        const packagePath = path.resolve("./db", "contacts.json");
        const arrayObject = JSON.parse(fs.readFileSync(packagePath));

        for (let i = 0; i <= arrayObject.length; i++) {
          if (obj.id == arrayObject[i].id) {
            return arrayObject[i]
          } else {
            return alert("Le contact n'existe pas ! ");
          }
        }
    },

    addContact(obj){
        const packagePath = path.resolve("./db", "contacts.json");
        const arrayObject = JSON.parse(fs.readFileSync(packagePath));
        var object = {
          id: uuidv4(null, null, 0),
          name: obj.name,
          firstName: obj.firstName,
          number: obj.number,
        };
        arrayObject.push(object);
        fs.writeFileSync(packagePath, JSON.stringify(arrayObject, null, "\t"));
    },

    deleteContact(obj){
        const packagePath = path.resolve("./db", "contacts.json");
        const arrayObject = JSON.parse(fs.readFileSync(packagePath));
        
        for (let i = 0; i <= arrayObject.length; i++) {
            if (obj.id == arrayObject[i].id) {
                arrayObject.slice(i);
            } else {
                alert('Le contact n\'existe pas ! ');
            }
        }
    }

}