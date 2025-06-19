const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const advisorRoutes = require('./routes/advisor'); // <== THIS LINE MUST EXIST

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/advisor', advisorRoutes); // <== THIS IS THE ROUTE

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

app.get('/', (req, res) => {
  res.send("API is working ✅");
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});


