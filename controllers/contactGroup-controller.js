const { contactGroupService } = require("../services/contactGroupService");
const { contactService } = require("../services/contactService");


const title = "Contact Manager";

exports.contactGroupController = {

  functionListContactGroup(req, res, next) {
    contactGroupService.getContactGroup().then(result => {
      res.render("contactGroup/listContactGroup", {
        title: "Contact Manager",
        contactsGroup: result,
      });
    }).catch(err => {
      throw new Error(err);
    });
  },

  functionPageAddContactGroup(req, res, next) {
    res.render("contactGroup/formContactGroup", { title: title });
  },

  functionAddContactGroup(req, res, next) {
    contactGroupService.addContactGroup(req.body);
    res.redirect("/");
  },

  functionPageDetailsContactGroup(req, res, next) {
    contactGroupService
      .getContactGroupById(req.body)
      .then((result) => {
        res.render("contactGroup/detailContactGroup", {
          title: title,
          contact: result,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  },

  functionDetailsContactGroup(req, res, next) {
    res.redirect("/");
  },

  functionPageDeleteContactGroup(req, res, next) {
    res.render("formContactGroup", {
      title: title,
      
    });
  },

  functionDeleteContactGroup(req, res, next) {
    contactGroupService.deleteContactGroup(req.body);
    res.redirect("/");
  },

  functionEditContactGroup(req, res, next) {
    // Insert method to save a contact
    res.redirect("/");
  },

  functionPageEditContactGroup(req, res, next) {
    res.render("formEditContactGroup", {
      title: title,
      // Mettre l'objet
      contact: {
        name: "obj.name",
        firstName: "obj.firstName",
        number: "obj.number",
      },
    });
  },
};
