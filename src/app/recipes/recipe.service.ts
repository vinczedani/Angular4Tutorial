import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spagetti',
      'Spagetti description',
      'https://i.ytimg.com/vi/EdxRA28JD5E/maxresdefault.jpg',
      [
        new Ingredient('Pasta', 2),
        new Ingredient('Tomato', 3),
        new Ingredient('Meat', 1)
      ]),
    new Recipe(
      'Spagetti',
      'New Spagetti description',
      'https://i.ytimg.com/vi/EdxRA28JD5E/maxresdefault.jpg',
      [
        new Ingredient('Pasta', 2),
        new Ingredient('Tomato', 3),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // slice makes a copy of the original
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
