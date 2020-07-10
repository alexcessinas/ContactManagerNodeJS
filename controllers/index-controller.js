const { contactService } = require("../services/contactService");

exports.indexController = {
  functionTitle(req, res, next) {
    contactService.getContact().then(result => {
      res.render("index", {
        title: "Contact Manager",
        contacts: result,
      });
    }).catch(err => {
      throw new Error(err);
    });
  },

  functionPageAddContact(req, res, next) {
    res.render("formContact", { title: "Contact Manager" });
  },

  functionAddContact(req, res, next) {
    contactService.addContact(req.body);
    res.redirect("/");
  },

  functionPageDetailsContact(req, res, next) {
    contactService.getContactById(1)
      .then((result) => {
        res.render("detailContact", {
          title: "Contact Manager",
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
    res.render("formContact", { title: "Contact Manager" });
  },

  functionDeleteContact(req, res, next) {
    contactService.deleteContact(req.body);
    res.redirect("/");
  },

  functionEditContact(req, res, next) {
    // Insert method to save a contact
    res.redirect("/");
  },

  functionPageEditContact(req, res, next) {
    res.render("formEditContact", {
      title: "Contact Manager",
      // Mettre l'objet
      contact: {
        name: "obj.name",
        firstName: "obj.firstName",
        number: "obj.number",
      },
    });
  },
};