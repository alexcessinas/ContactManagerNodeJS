var express = require('express');
const { indexController } = require("../controllers/index-controller");
var router = express.Router();

/* GET home page. */
router.get('/', indexController.functionTitle);

router.get('/create-contact', indexController.functionPageAddContact);

router.post("/create-contact", indexController.functionAddContact);

module.exports = router;
