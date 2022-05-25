const handler = require('../handlers/handler.js');
const { getAllHazardsUseCase } = require('../useCase/getAllHazardsUseCase.js');
const { getHazardUseCase } = require('../useCase/getHazardUseCase.js');
const { postHazardUseCase } = require('../useCase/postHazardUserCase.js');

async function getAllHazards(request, response) {
  try {
    const data = await getAllHazardsUseCase();

    return handler.onRequestSuccess(response, data);
  } catch (error) {
    return handler.onRequestError(response, error);
  }
}

async function getHazard(request, response) {
  const { hazardId } = request.params;
  try {
    const data = await getHazardUseCase(hazardId);

    return handler.onRequestSuccess(response, data);
  } catch (error) {
    return handler.onRequestError(response, error);
  }
}

async function postHazard(request, response) {
  try {
    const data = await postHazardUseCase();

    return handler.onRequestSuccess(response, data);
  } catch (error) {
    return handler.onRequestError(response, error);
  }
}

module.exports = {
  getAllHazards,
  getHazard,
  postHazard,
};
