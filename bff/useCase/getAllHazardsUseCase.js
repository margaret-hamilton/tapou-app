const fetch = require('node-fetch');

const getAllHazardsUseCase = async () => {
  try {
    const response = await fetch('https://628d4fd9a339dfef8798e164.mockapi.io/Hazard');
    const hazards = await response.json();
    return hazards;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllHazardsUseCase,
};
