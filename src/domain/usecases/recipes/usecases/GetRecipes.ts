/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Recipes } from "@domain/entities";
import { APIState } from "@types";
import { RecipesRepository } from "@domain/usecases";

export class GetRecipes {

  constructor(private repository: RecipesRepository) {}

  invoke(): Promise<APIState<Recipes, Error>> {
    return this.repository.getRecipes();
  }
}
