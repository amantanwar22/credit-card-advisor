const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const CreditCard = require('../models/CreditCard');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const cards = JSON.parse(fs.readFileSync(__dirname + '/cards.json', 'utf-8'));

async function importData() {
  try {
    await CreditCard.deleteMany();
    await CreditCard.insertMany(cards);
    console.log('✅ Card data imported!');
    process.exit();
  } catch (err) {
    console.error('❌ Import failed:', err);
    process.exit(1);
  }
}

importData();
