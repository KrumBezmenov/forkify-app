const recipeContainer = document.querySelector('.recipe');

import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//https://forkify-api.herokuapp.com/api/v2/recipes/:id
// api key : 318b1fa2-d8bc-4c01-a58d-b9f909129906

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);
    // model.state.recipe;

    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
