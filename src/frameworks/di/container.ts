/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { GetRecipes, RecipesRepository as RecipesRepositoryDomain } from "@domain/usecases";
import { RecipesDataSourceImpl } from "@adapters/datasource";
import { RecipesDataSource, GetRecipeById } from "@domain/usecases";
import { container } from "tsyringe";
import { RecipesRepository } from "@frameworks";

container.register<RecipesRepository>("RecipesRepositoryFramework", { useClass: RecipesRepository });
container.register<RecipesDataSource>("RecipesDataSourceImpl", { useClass: RecipesDataSourceImpl });
/**
 * Registering manually the instance for `RecipesRepository` from @domain to
 * avoid using @injectable to inner layer (which are abstract)
 */
container.register<RecipesRepositoryDomain>("RecipesRepositoryDomain", {
  useFactory: (container) => {
    const dataSource = container.resolve<RecipesDataSource>("RecipesDataSourceImpl");
    return new RecipesRepositoryDomain(dataSource);
  }
});
/**
 * Registering manually the instance for `GetRecipes` from @domain to
 * avoid using @injectable to inner layer (which are abstract)
 */
container.register<GetRecipes>("GetRecipesUseCase", {
  useFactory: (container) => {
    const repository = container.resolve<RecipesRepositoryDomain>("RecipesRepositoryDomain");
    return new GetRecipes(repository);
  }
});
/**
 * Registering manually the instance for `GetRecipeById` from @domain to
 * avoid using @injectable to inner layer (which are abstract)
 */
container.register<GetRecipeById>("GetRecipeByIdUseCase", {
  useFactory: (container) => {
    const repository = container.resolve<RecipesRepositoryDomain>("RecipesRepositoryDomain");
    return new GetRecipeById(repository);
  }
});
