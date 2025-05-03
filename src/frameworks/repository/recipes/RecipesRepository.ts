/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Recipe, Recipes } from "@domain/entities";
import { APIState, Failure, Success } from "@types";
import axios, { AxiosResponse } from "axios";
import { injectable } from "tsyringe";

/**
 * Decorating `RecipesRepository` with @injectable so tsyringe will automatically
 * create an instance for `RecipesRepository` and will be consumed at the later
 * part of the code. This `RecipesRepository` is responsible for consuming and connecting
 * to API calls that `DataSourceImpl` will be used to connect to the UseCase
 */
@injectable()
export class RecipesRepository {

  getRecipes(): Promise<APIState<Recipes, Error>> {
    return new Promise<APIState<Recipes, Error>>(
      async (resolve, reject) => {
        try {
          const response: AxiosResponse<Recipes> = await
            axios.get('https://dummyjson.com/recipes');
          resolve(Success.create(response.data));
        } catch (error) {
          reject(Failure.create(new Error("Failed to connect")));
        }
      }
    );
  }

  getRecipeById(recipeId: number): Promise<APIState<Recipe, Error>> {
    return new Promise<APIState<Recipe, Error>>(
      async (resolve, reject) => {
        try {
          const response: AxiosResponse<Recipe> = await axios.get(
            `https://dummyjson.com/recipes/${recipeId}`,
          );
          resolve(Success.create(response.data));
        } catch (error) {
          reject(Failure.create(new Error("Failed to connect")));
        }
      }
    );
  }
}
