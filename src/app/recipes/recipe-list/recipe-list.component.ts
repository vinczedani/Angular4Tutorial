import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Spagetti', 'Spagetti description', 'https://i.ytimg.com/vi/EdxRA28JD5E/maxresdefault.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
