// array variables containing percentages for doughs
let french = [100, 66, 2, 1.2];
let butterMilk = [];

let recipeWeight;
let recipe = alert('Which recipe do you wish to mix?');
let finalRecipe = []
console.log(recipe);
let conversionFactor = recipeWeight / recipe;

function newRecipe (){
  for (let i = 0, i <= recipe.length; i++)
  {  finalRecipe = finalRecipe.push(recipe[i] * conversionFactor)

  }
  return document.write(`<ul>`)
}


https://repl.it/repls/UnhealthyCultivatedDifferences