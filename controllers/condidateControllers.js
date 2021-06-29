const condidateModule = require("../models/condidateModule")

//create a condidate
module.exports.createCondidate = async (req, res) => {
    try {
        const condidate = await condidateModule.create(req.body)
        res.send(condidate)
    } catch (err) {
        res.send(err);
    }
}

//find all condidate 
module.exports.findAllCondidate = async (req, res) => {
    try {
        const condidates = await condidateModule.find()
        res.send(condidates)
    } catch (err) {
        res.send(err);
    }
}

//Insert score for condidate  
module.exports.insertScore = async (req, res) => {
    const score = {
        test_score: {
            first_round : req.body.first_round , 
            second_round : req.body.second_round, 
            third_round: req.body.third_round}
    };
    try {
        let condidates = await condidateModule.findOne({ email: req.body.email})
        let insertScore = await condidates.updateOne({$set: score});
        res.send(insertScore);
        console.log(score);
    } catch (err) {
        res.send(err);
    }
}