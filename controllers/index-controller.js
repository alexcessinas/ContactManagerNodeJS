exports.indexController = {

  functionTitle(req, res, next) {
    res.render('index', { title: 'Contact Manager', compteur: 10 });
    next();
  },

  functionAddContact(req, res, next) {
    res.render('listContact', { compteur: 15 });
    next();
  }


}