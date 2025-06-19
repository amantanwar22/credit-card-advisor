const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
  name: String,
  issuer: String,
  joiningFee: Number,
  annualFee: Number,
  rewardType: String,
  rewardRate: String,
  eligibility: String,
  perks: [String],
  image: String,
  applyLink: String
});

module.exports = mongoose.model("CreditCard", creditCardSchema);
