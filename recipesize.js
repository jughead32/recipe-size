/*This is an app to figure out the total recipe for a given dough size using
 bakers percentages user will check dough recipe, enter desired recipe weight. recipe will be printed to page for user to print.*/

// array variables containing percentages for doughs [flour,water,salt,yeast]
let french = [100, 66, 2, 1.2];
let butterMilk = [];

let recipeWeight;


// assigns variable based on users checkbox

let recipe;
function submit() {
  recipe = document.getElementById('frenchDough').value = french
}

submit()



//factor used to figure out recipe
let conversionFactor = 100 / recipe.reduce((total, amount) => total + amount);

//function creating final recipe array to be printed to page and used
let newRecipe = [];
function finalRecipe (arr){
  for (let i = 0; i < arr.length; i++){
    console.log(i);
     newRecipe.push((conversionFactor * arr[i]).toFixed(2));
  }
  return newRecipe
}
finalRecipe(recipe)



// https://repl.it/repls/UnhealthyCultivatedDifferences