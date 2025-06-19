const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const advisorRoutes = require('./routes/advisor');

const app = express();

// ✅ CORS fix for Vercel frontend
app.use(cors({
  origin: "https://credit-card-advisor-chi.vercel.app",
  credentials: true
}));

app.use(express.json());

app.use('/api/advisor', advisorRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send("API is working ✅");
});

const PORT = process.env.PORT || 5001;

// ✅ Clean mongoose.connect without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });




