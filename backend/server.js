const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const advisorRoutes = require('./routes/advisor');

const app = express();

// ✅ CORS fix: allow Vercel frontend to call Render backend
app.use(cors({
  origin: "https://credit-card-advisor-chi.vercel.app",
  credentials: true
}));

app.use(express.json());

// ✅ Route for card recommendations
app.use('/api/advisor', advisorRoutes);

// ✅ Health check route
app.get('/', (req, res) => {
  res.send("API is working ✅");
});

// ✅ Connect to MongoDB and start the server
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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



