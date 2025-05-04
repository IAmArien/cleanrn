/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Recipe, Recipes } from "@domain/entities";
import { RecipesDataSource } from "@domain/usecases";
import { APIState } from "@types";

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
