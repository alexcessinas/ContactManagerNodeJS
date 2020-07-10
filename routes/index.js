var express = require('express');
const { contactController } = require("../controllers/contact-controller");
var router = express.Router();

/* GET home page. */
router.get('/', contactController.functionTitle);

/* Get formulaire de création d'un contact */
router.get('/create-contact', contactController.functionPageAddContact);
/* Post pour sauvegarder les données du formulaire */
router.post("/create-contact", contactController.functionAddContact);

router.get("/delete-contact/:id", contactController.functionPageDeleteContact);
router.post("/delete-contact/:id", contactController.functionDeleteContact);

router.get("/details-contact/:id", contactController.functionPageDetailsContact);
router.post("/details-contact/:id", contactController.functionDetailsContact);

router.get("/edit-contact/:id", contactController.functionPageEditContact);
router.post("/edit-contact/:id", contactController.functionEditContact);

module.exports = router;
