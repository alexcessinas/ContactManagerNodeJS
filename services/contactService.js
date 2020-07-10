const { v4: uuidv4 } = require('uuid');
const connection = require("../db/db");

exports.contactService = {

  getContact() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * from `contact`;", (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  getContactById(id) {
    const query = "SELECT * FROM `contact` WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(query, id, (error, result, fields) => {
        if (error) reject(error);
        resolve(result[0]);
      });
    });
  },

  addContact(obj) {
    const query =
      "INSERT INTO `contact` (id, name, firstName, number) VALUES(?, ?, ?, ?);";
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [uuidv4(null, null, 0), obj.name, obj.firstName, obj.number],
        (error, result, fields) => {
          if (error) reject(error);
          resolve(result);
        }
      );
    });
  },

  deleteContact(id) {
    const query = "DELETE FROM `contact` WHERE id=?;";
    return new Promise((reject) => {
      connection.query(query, id, (error, result, fields) => {
        if (error) reject(error);
        console.log(result);
        
      });
    });
  },
};