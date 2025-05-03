/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Recipe, Recipes } from "@domain/entities";
import { RecipesRepository } from "@frameworks";
import { APIState } from "@types";
import { RecipesDataSource } from "@domain/usecases";
import { inject, injectable } from "tsyringe";

/**
 * This creates implementation for `RecipesDataSource` from @domain while
 * decorating with @injectable so tsyringe will create an instance automatically.
 * This data source is dependent to the `RecipesRepository` under @frameworks 
 * which contains the logic of consuming APIs
 */
@injectable()
export class RecipesDataSourceImpl implements RecipesDataSource {

  /**
   * Uses `RecipesRepository` to connect the API logic to the repository and usecase
   * @param repository RecipesRepository under @frameworks
   */
  constructor(@inject("RecipesRepositoryFramework") private repository: RecipesRepository) {}

  getRecipeById(recipeId: number): Promise<APIState<Recipe, Error>> {
    return this.repository.getRecipeById(recipeId);
  }

  getRecipes(): Promise<APIState<Recipes, Error>> {
    return this.repository.getRecipes();
  }
};
