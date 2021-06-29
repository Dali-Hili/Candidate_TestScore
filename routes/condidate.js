const express = require('express');
const router = express.Router();
const condidateController = require('../controllers/condidateControllers')
//Create condidate
router.post("/create", condidateController.createCondidate)
module.exports = router