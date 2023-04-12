const {Router} = require('express');
const {testget} = require('../controller/controller');
const router = Router();


router.get('/test', testget);








module.exports = router;