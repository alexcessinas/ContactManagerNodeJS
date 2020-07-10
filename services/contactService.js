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
      "INSERT INTO `contact` (name, firstName, number) VALUES(?, ?, ?);";
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [obj.name, obj.firstName, obj.number],
        (error, result, fields) => {
          if (error) reject(error);
          resolve(result);
        }
      );
    });
  },

  updateContact(obj, id) {
    console.log(obj);
    
    const query =
      "UPDATE `contact` SET name = ?, firstName = ?, number = ? WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [obj.name, obj.firstName, obj.number, obj.id],
        (error, result, fields) => {
          if (error) reject(error);
        }
      );
    });
  },

  deleteContact(id) {
    const query = "DELETE FROM `contact` WHERE id=?;";
    return new Promise((reject) => {
      connection.query(query, id, (error, result, fields) => {
        if (error) reject(error);        
      });
    });
  },
};