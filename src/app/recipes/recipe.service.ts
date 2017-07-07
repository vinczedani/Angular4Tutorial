import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

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
}
