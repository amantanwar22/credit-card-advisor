const CreditCard = require('../models/CreditCard');

exports.getRecommendations = async (req, res) => {
  console.log("✅ Received request at /recommend");
  console.log("Body:", req.body);

  try {
    const { income, habits, benefits, creditScore } = req.body;
    const userIncome = parseInt(income.replace(/[^\d]/g, ''));

    const allCards = await CreditCard.find();

    const matched = allCards.filter(card => {
      const cardPerks = card.perks.map(p => p.toLowerCase());
      const benefitMatch = benefits.includes(card.rewardType.toLowerCase());
      const habitMatch = habits.some(h => cardPerks.includes(h.toLowerCase()));
      const incomeMatch = checkIncomeEligibility(card.eligibility, userIncome);
      return benefitMatch && habitMatch && incomeMatch;
    });

    const topCards = matched.slice(0, 5);

    const response = topCards.map(card => ({
      name: card.name,
      issuer: card.issuer,
      rewardType: card.rewardType,
      reason: `This card offers ${card.rewardType} rewards and matches your spending habits: ${habits.join(", ")}`,
      estimatedReward: `You could earn up to ₹${Math.floor(Math.random() * 9000 + 1000)} per year`,
      perks: card.perks,
      image: card.image,
      applyLink: card.applyLink
    }));

    res.status(200).json(response);
  } catch (err) {
    console.error("❌ Error in recommendation:", err);
    res.status(500).json({ message: "Something went wrong." });
  }
};

function checkIncomeEligibility(cardEligibility, userIncome) {
  const match = cardEligibility.match(/₹?(\d+)[kK]?/);
  if (!match) return true;
  const requiredIncome = parseInt(match[1]) * 1000;
  return userIncome >= requiredIncome;
}
