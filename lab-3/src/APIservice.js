export function fetchRandomRecipes() {
  return fetch(
    "https://api.spoonacular.com/recipes/random?number=9&apiKey=f95d9195e7114ffc9be334209a52d0bb&tags=vegetarian,dessert"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("random:", data.recipes);
      return data.recipes;
    });
}

export function fetchRecipeByKeyWord(query) {
  return fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=12&apiKey=f95d9195e7114ffc9be334209a52d0bb`
  ).then((res) =>
    res.json().then((data) => {
      console.log("search [" + query + "]:", data.results);
      return data.results;
    })
  );
}

export function fetchRecipeDetails(recipeID) {
  return fetch(
    `https://api.spoonacular.com/recipes/${recipeID}/analyzedInstructions?&apiKey=f95d9195e7114ffc9be334209a52d0bb`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

export function fetchRecipeByID(recipeID) {
  return fetch(
    ` https://api.spoonacular.com/recipes/${recipeID}/information?&apiKey=f95d9195e7114ffc9be334209a52d0bb`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("recipe details", data);
      return data;
    });
}
