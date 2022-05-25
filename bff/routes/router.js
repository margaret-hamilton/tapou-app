const express = require('express');

const hazardController = require('../controllers/hazardController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Tapou Hazard API');
});

router.get('/hazards/', hazardController.getAllHazards);
router.get('/hazards/:hazardId', hazardController.getHazard);
router.post('/hazards/', hazardController.postHazard);

module.exports = router;
