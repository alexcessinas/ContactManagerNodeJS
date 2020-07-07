const { contactService } = require("../services/contactService");


exports.indexController = {

  functionTitle(req, res, next) {
    const lala = contactService.getContact();
    console.log(lala);
    
  
    res.render('index', { title: 'Contact Manager', contacts: lala });
  },

  functionAddContact(req, res, next) {
    res.render("formContact", { title: "Contact Manager" });
  }
}