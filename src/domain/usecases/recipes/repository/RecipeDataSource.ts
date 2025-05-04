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
