/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { GetRecipeById, GetRecipes, RecipesDataSource, RecipesRepository } from "@domain/usecases";
import { container } from "tsyringe";

/**
 * Registering manually the instance for `RecipesRepository` from @domain to
 * avoid using @injectable to inner layer (which are abstract)
 */
container.register<RecipesRepository>("RecipesRepositoryDomain", {
  useFactory: (container) => {
    const dataSource = container.resolve<RecipesDataSource>("RecipesDataSourceImpl");
    return new RecipesRepository(dataSource);
  }
});
/**
 * Registering manually the instance for `GetRecipes` from @domain to
 * avoid using @injectable to inner layer (which are abstract)
 */
container.register<GetRecipes>("GetRecipesUseCase", {
  useFactory: (container) => {
    const repository = container.resolve<RecipesRepository>("RecipesRepositoryDomain");
    return new GetRecipes(repository);
  }
});
/**
 * Registering manually the instance for `GetRecipeById` from @domain to
 * avoid using @injectable to inner layer (which are abstract)
 */
container.register<GetRecipeById>("GetRecipeByIdUseCase", {
  useFactory: (container) => {
    const repository = container.resolve<RecipesRepository>("RecipesRepositoryDomain");
    return new GetRecipeById(repository);
  }
});
