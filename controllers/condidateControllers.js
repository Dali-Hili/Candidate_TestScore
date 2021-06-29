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