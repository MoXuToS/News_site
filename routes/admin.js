var express = require('express');
const adminController = require("../Controller/adminController.js");
var router = express.Router();
var bodyparser = require('body-parser');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();

router.get('/', adminController.getArticleAll);
router.get('/:idArticle', adminController.getArticle);
router.post('/addArticle', adminController.addArticle);
router.post('/editArticle', adminController.editArticle);
router.post('/deleteArticle', adminController.deleteArticle);

module.exports = router;