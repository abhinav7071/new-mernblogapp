const express = require('express');
const router = express.Router();
const {updateName, updatePassword} = require('../controllers/profileController');
const auth = require('../utils/auth');

router.post("/updateName",auth, updateName);
router.post("/updatePassword",auth, updatePassword);

module.exports = router;