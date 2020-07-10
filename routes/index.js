var express = require('express');
const { contactController } = require("../controllers/contact-controller");
const { contactGroupController } = require("../controllers/contactGroup-controller");
var router = express.Router();

/** Routes Contact */
router.get('/', contactController.functionTitle);

router.get('/create-contact', contactController.functionPageAddContact);
router.post("/create-contact", contactController.functionAddContact);

router.get("/details-contact/:id", contactController.functionPageDetailsContact);
router.post("/details-contact/:id", contactController.functionDetailsContact);

router.get("/edit-contact/:id", contactController.functionPageEditContact);
router.post("/edit-contact/:id", contactController.functionEditContact);

router.get("/delete-contact/:id", contactController.functionPageDeleteContact);
router.post("/delete-contact/:id", contactController.functionDeleteContact);

/** Routes ContactGroup */

router.get('/list-contactGroup', contactGroupController.functionListContactGroup);

router.get('/create-contactGroup', contactGroupController.functionPageAddContactGroup);
router.post("/create-contactGroup", contactGroupController.functionAddContactGroup);

router.get("/details-contactGroup/:id", contactGroupController.functionPageDetailsContactGroup);
router.post("/details-contactGroup/:id", contactGroupController.functionDetailsContactGroup);

router.get("/edit-contactGroup/:id", contactGroupController.functionPageEditContactGroup);
router.post("/edit-contactGroup/:id", contactGroupController.functionEditContactGroup);

router.get("/delete-contactGroup/:id", contactGroupController.functionPageDeleteContactGroup);
router.post("/delete-contactGroup/:id", contactGroupController.functionDeleteContactGroup);

module.exports = router;
