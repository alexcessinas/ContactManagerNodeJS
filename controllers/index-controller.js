const { contactService } = require("../services/contactService");



exports.indexController = {

  functionTitle(req, res, next) {  
    res.render('index', { title: 'Contact Manager', contacts: contactService.getContact() });
  },

  functionPageAddContact(req, res, next) {
    res.render("formContact", { title: "Contact Manager" });
  },
  
  functionAddContact(req, res, next) {
    contactService.addContact(req.body);    
    res.redirect('/');
  }

}