const fetch = require('node-fetch');

const postHazardUseCase = async () => {
  try {
    let bodies;
    const response = await fetch('https://628d4fd9a339dfef8798e164.mockapi.io/Hazard/', {
      method: 'post',
      body: JSON.stringify(bodies),
      headers: { 'Content-Type': 'application/json' },
    });
    const hazard = await response.json();
    return hazard;
  } catch (e) {
    return e;
  }
};

module.exports = {
  postHazardUseCase,
};
