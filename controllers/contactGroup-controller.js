const { contactGroupService } = require("../services/contactGroupService");
const { contactService } = require("../services/contactService");


const title = "Contact Manager";

exports.contactGroupController = {

  functionListContactGroup(req, res, next) {
    contactGroupService.getGroup().then(result => {
      res.render("contactGroup/listContactGroup", {
        title: title,
        contactsGroup: result,
      });
    }).catch(err => {
      throw new Error(err);
    });
  },

  functionPageAddContactGroup(req, res, next) {
    contactService.getContact().then((result) => {
      res.render("contactGroup/formContactGroup", {
         title: title,
          contacts: result
         });
    })
    
  },

  functionAddContactGroup(req, res, next) {  
    const idContact = req.body.idContact;
    const nameGroup = req.body.name;
    contactGroupService.addGroup(nameGroup).then((result) => {    
      const idGroup = result.insertId;
      const promiseArray = idContact.map((id) => contactGroupService.saveContact(idGroup, id))
      Promise.all(promiseArray).then((result => res.redirect("/list-contactGroup")));
    })
  },

  functionPageDetailsContactGroup(req, res, next) {
    contactGroupService
      .getGroupById(req.params.id)
      .then((group) => {
        const idGroup = group[0].id;
        contactGroupService.getContactByGroupId(idGroup).then(result => {
          res.render("contactGroup/detailContactGroup", {
            title: title,
            contactGroup: group[0],
            contacts: result
          });
        }).catch ((err) => {
          throw new Error(err);
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  },

  functionDetailsContactGroup(req, res, next) {
    res.redirect("/list-contactGroup");
  },

  functionPageDeleteContactGroup(req, res, next) {
    res.render("contactGroup/deleteContactGroup", { title: title });
  },

  functionDeleteContactGroup(req, res, next) {
    contactGroupService.deleteGroup(req.params.id);
    res.redirect("/list-contactGroup");
  },

  functionEditContactGroup(req, res, next) {
    contactGroupService.updateGroup(req.body, req.params.id);
    console.log(req.body);
    res.redirect("/list-contactGroup");
  },

  functionPageEditContactGroup(req, res, next) {
    contactGroupService
      .getGroupById(req.params.id)
      .then((group) => {
        const idGroup = group[0].id;
        contactGroupService.getContactByGroupId(idGroup).then(result => {
          res.render("contactGroup/formEditContactGroup", {
            title: title,
            contactGroup: group[0],
            contacts: result
          });
        }).catch((err) => {
          throw new Error(err);
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};
