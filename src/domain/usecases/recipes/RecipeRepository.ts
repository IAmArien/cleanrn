/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Recipe, Recipes } from "@domain/entities";
import { APIState } from "@types";

/**
 * Defining the structure of the Recipes Feature wherein we can get all recipes
 * and a specific recipe by using its ID. This structure is what we called
 * DataSource which represents the functions that UseCases can be used in such
 * abstracted way
 */
export interface RecipesDataSource {
  getRecipes: () => Promise<APIState<Recipes, Error>>;
  getRecipeById: (recipeId: number) => Promise<APIState<Recipe, Error>>;
}

/**
 * This repository bridges the DataSource to UseCases in abstract way. It does
 * not contain any implementation logic. UseCases can pull the corresponding
 * logic it needs from here
 */
export class RecipesRepository {

  private dataSource: RecipesDataSource;

  constructor(dataSource: RecipesDataSource) {
    this.dataSource = dataSource;
  }

  getRecipes(): Promise<APIState<Recipes, Error>> {
    return this.dataSource.getRecipes();
  }

  getRecipeById(recipeId: number): Promise<APIState<Recipe, Error>> {
    return this.dataSource.getRecipeById(recipeId);
  }
}
