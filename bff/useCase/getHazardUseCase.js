const fetch = require('node-fetch');

const getHazardUseCase = async (hazardId) => {
  try {
    const response = await fetch(`https://628d4fd9a339dfef8798e164.mockapi.io/Hazard/${hazardId}`);
    const hazard = await response.json();
    return hazard;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getHazardUseCase,
};
