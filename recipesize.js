/*This is an app to figure out the total recipe for a given dough size using
 bakers percentages*/


// array variables containing percentages for doughs [flour,water,salt,yeast]
let french = [100, 66, 2, 1.2];
let butterMilk = [];


let recipeWeight; // desired recipe weight
let recipe = alert('Which recipe do you wish to mix?'); //chosen recipe
let finalRecipe = [] //final array to be printed
console.log(recipe);

//factor used to figure out recipe

let conversionFactor = recipeWeight / recipe.reduce((total, amount) => total + amount);


//function creating final recipe array to be printed to page and used
function finalRecipe (arr){
  for (let i = 0; i < arr.length; i++){
    console.log(i);
     newRecipe.push((cf * french[i]).toFixed(2));
  }
  return newRecipe
}
finalRecipe(french);




// https://repl.it/repls/UnhealthyCultivatedDifferences