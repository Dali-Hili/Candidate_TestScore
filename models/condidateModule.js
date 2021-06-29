const mongoose = require("mongoose");

const condidateSchema = new mongoose.Schema({
    name: String,
    email: String,
    test_score: {first_round: Number, second_round: Number, third_round: Number}
});

module.exports = mongoose.model("condidate", condidateSchema );