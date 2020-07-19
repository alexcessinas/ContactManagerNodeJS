const { v4: uuidv4 } = require('uuid');
const connection = require("../db/db");

exports.contactGroupService = {
  getGroup() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * from `group`;", (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  getGroupById(id) {
    const query = "SELECT * FROM `group` WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(query, id, (error, result, fields) => {        
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  addGroup(name) {
    const query =
      "INSERT INTO `group` (name) VALUES(?);";
    return new Promise((resolve, reject) => {      
      connection.query(
        query,
        name,
        (error, result, fields) => {
          if (error) reject(error);
          resolve(result);
        }
      );
    });
  },

  saveContact(idGroup, idContact) {
    const query =
      "INSERT INTO contactgroup(contact_id, `group_id`) VALUES(?, ?);";
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [idContact, idGroup],
        (error, result, fields) => {
          if (error) reject(error);
          resolve(result);
        }
      );
    });
  },

  updateGroup(obj, id) {
    const query =
      "UPDATE `group` SET name = ? WHERE id = ?;";
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [obj.name, id],
        (error, result, fields) => {
          if (error) reject(error);
        }
      );
    });
  },


  deleteGroup(id) {
    const query = "DELETE FROM `group` WHERE id=?;";
    return new Promise((resolve, reject) => {
      connection.query(query, id, (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  getContactByGroupId(id){
    const query = 
    "SELECT * from contact INNER JOIN contactgroup ON contact.id = contactgroup.contact_id WHERE contactgroup.group_id = ?;"
    return new Promise((resolve, reject) => {
      connection.query(query, id, (error, result, fields) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }

};