var express = require('express');
var router = express.Router();

//Require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills');



// All actual paths start with "/skills"
// GET /skills
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;