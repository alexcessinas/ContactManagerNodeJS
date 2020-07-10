const { contactGroupService } = require("../services/contactGroupService");

exports.contactGroupController = {
  functionPageAddContactGroup(req, res, next) {
    res.render("formContactGroup", { title: "Contact Manager" });
  },

  functionAddContactGroup(req, res, next) {
    contactGroupService.addContactGroup(req.body);
    res.redirect("/");
  },

  functionPageDetailsContactGroup(req, res, next) {
    contactGroupService
      .getContactGroupById(req.body)
      .then((result) => {
        res.render("detailContactGroup", {
          title: "Contact Manager",
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
    res.render("formContactGroup", { title: "Contact Manager" });
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
