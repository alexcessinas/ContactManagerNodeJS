const { contactService } = require("../services/contactService");

const title = "Contact Manager";

exports.contactController = {
  functionTitle(req, res, next) {
    contactService.getContact().then(result => {
      res.render("index", {
        title: title,
        contacts: result,
      });
    }).catch(err => {
      throw new Error(err);
    });
  },

  functionPageAddContact(req, res, next) {
    res.render("contact/formContact", { title: title});
  },

  functionAddContact(req, res, next) {
    contactService.addContact(req.body);
    res.redirect("/");
  },

  functionPageDetailsContact(req, res, next) {   
    contactService.getContactById(req.params.id)
      .then((result) => {        
        res.render("contact/detailContact", {
          title: title,
          contact: result,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  },

  functionDetailsContact(req, res, next) {
    res.redirect("/");
  },

  functionPageDeleteContact(req, res, next) {
    res.render("contact/deleteContact", { title: title });
  },

  functionDeleteContact(req, res, next) {
    contactService.deleteContact(req.params.id);
    res.redirect("/");
  },

  functionEditContact(req, res, next) {
    contactService.updateContact(req.body, req.params.id);
    res.redirect("/");
  },

  functionPageEditContact(req, res, next) {
    contactService
      .getContactById(req.params.id)
      .then((result) => {
        res.render("contact/formEditContact", {
          title: title,
          contact: result,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};