const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/advisorController');

router.post('/recommend', getRecommendations); // <== POST route

module.exports = router;

