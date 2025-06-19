# 💳 Credit Card Advisor – Times Internet Assignment

An AI-powered credit card recommendation system built using Node.js, Express, MongoDB, and React.

Built and deployed by Aman Tanwar (2021UBT1001).

---

## 🌐 Live Demo Links

- 🔗 **Frontend (React, Vercel)**:  
  https://credit-card-advisor-chi.vercel.app

- ⚙️ **Backend (Node.js, Render)**:  
  https://credit-card-advisor-backend.onrender.com

- 📦 **GitHub Repository**:  
  https://github.com/amantanwar22/credit-card-advisor

---

## 🛠 Tech Stack

- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **Hosting**: Vercel (Frontend), Render (Backend)

---

## 📋 Features

- Conversational UI (form-step based assistant)
- 20+ Indian credit cards stored in MongoDB
- Filters and ranks cards based on:
  - Income
  - Credit Score
  - Reward Preferences
  - Spending Categories
- Personalized recommendations with reasoning & estimated reward
- Responsive design for mobile and desktop

---

## 🚀 Local Setup

### Clone the Repository

```bash
git clone https://github.com/amantanwar22/credit-card-advisor.git
cd credit-card-advisor
```

### Setup Backend

```bash
cd backend
npm install
# Create a `.env` file with:
# PORT=5001
# MONGO_URI=your_mongodb_uri
node server.js
```

### Setup Frontend

```bash
cd ../frontend
npm install
# Create a `.env` file with:
# REACT_APP_API_URL=http://localhost:5001
npm start
```

---

## 👤 Author

**Aman Tanwar**  
Roll No: 2021UBT1001  
Email: aman.tanwar.ug21nsut.ac.in
