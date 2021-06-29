const express = require('express');
const router = express.Router();
const condidateController = require('../controllers/condidateControllers')

//Create condidate
router.post("/create", condidateController.createCondidate)

//find all condidate 
router.get("/", condidateController.findAllCondidate)

//insert condidate score
router.put("/insertScore/:email", condidateController.insertScore)

//Get highest scoring candidate
router.get("/highestScore", condidateController.highestScoringCondidate)

module.exports = router