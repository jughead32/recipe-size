/*This is an app to figure out the total recipe for a given dough size using
 bakers percentages user will check dough recipe, enter desired recipe weight. recipe will be printed to page for user to print.*/

// array variables containing percentages for doughs [flour,water,salt,yeast]
let french = [100, 66, 2, 1.2];
let butterMilk = [];

let recipeWeight = document.getElementById('weight').value;// desired recipe weight
console.log(recipeWeight)

//factor used to figure out recipe
let conversionFactor = recipeWeight / french.reduce((total, amount) => total + amount);

//function creating final recipe array to be printed to page and used
let newRecipe = [];
function finalRecipe (arr){
  for (let i = 0; i < arr.length; i++){
    console.log(i);
     newRecipe.push((cf * french[i]).toFixed(2));
  }
  return newRecipe
}
finalRecipe(french);




// https://repl.it/repls/UnhealthyCultivatedDifferences