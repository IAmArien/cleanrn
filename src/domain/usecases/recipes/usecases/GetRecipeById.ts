/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Recipe } from "@domain/entities";
import { APIState } from "@types";
import { RecipesRepository } from "@domain/usecases";

export class GetRecipeById {

  constructor(private repository: RecipesRepository) {}

  invoke(recipeId: number): Promise<APIState<Recipe, Error>> {
    return this.repository.getRecipeById(recipeId);
  }
};
