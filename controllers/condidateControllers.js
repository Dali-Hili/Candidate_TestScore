const condidateModule = require("../models/condidateModule")

//create a condidate
module.exports.createCondidate = async (req, res) => {
    //check if the email is already used
    const emailExists = await condidateModule.findOne({ email: req.body.email });
    if (emailExists) return res.send("Email already exists")
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
            third_round: req.body.third_round
        }
    };
    try {
        let condidates = await condidateModule.findOne({ email: req.params.email})
        let insertScore = await condidates.updateOne({$set: score});
        res.send(insertScore);
        console.log(score);
    } catch (err) {
        res.send(err);
    }
}

//Get highest scoring candidate

module.exports.highestScoringCondidate = async (req, res) => {
    try {
        const condidates = await condidateModule.find()
        const highestScoring = condidates.reduce((acc,cur) => {
            total = cur.test_score?.first_round + cur.test_score?.second_round + cur.test_score?.third_round 
            return acc[0] < total ? [total,cur.name] : acc
        },[-1,''])
        res.send(highestScoring)
    } catch (err) {
        res.send(err);
    }
}
