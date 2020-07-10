var express = require('express');
const { indexController } = require("../controllers/index-controller");
var router = express.Router();

/* GET home page. */
router.get('/', indexController.functionTitle);

/* Get formulaire de création d'un contact */
router.get('/create-contact', indexController.functionPageAddContact);
/* Post pour sauvegarder les données du formulaire */
router.post("/create-contact", indexController.functionAddContact);

router.get("/delete-contact/:id", indexController.functionPageDeleteContact);
router.post("/delete-contact/:id", indexController.functionDeleteContact);

router.get("/details-contact/:id", indexController.functionPageDetailsContact);
router.post("/details-contact/:id", indexController.functionDetailsContact);

router.get("/edit-contact/:id", indexController.functionPageEditContact);
router.post("/edit-contact/:id", indexController.functionEditContact);

module.exports = router;
