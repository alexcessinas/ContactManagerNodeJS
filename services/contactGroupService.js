const { v4: uuidv4 } = require('uuid');
const connection = require("../db/db");

exports.contactGroupService = {
  getContactGroup() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * from `group_contact`;", (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  getContactGroupById(id) {
    const query = "SELECT * FROM `group_contact` WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(query, id, (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  addContactGroup(obj) {
    const query =
      "INSERT INTO `group_contact` (id, name, id_contact) VALUES(?, ?, ?, ?);";
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [uuidv4(null, null, 0), obj.name, obj.id_contact],
        (error, result, fields) => {
          if (error) reject(error);
          resolve(result);
        }
      );
    });
  },

  deleteContactGroup(id) {
    const query = "DELETE FROM `group_contact` WHERE id=?;";
    return new Promise((resolve, reject) => {
      connection.query(query, id, (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },
};