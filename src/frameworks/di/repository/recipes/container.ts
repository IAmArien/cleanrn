/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { RecipesDataSourceImpl } from "@adapters/datasource";
import { RecipesDataSource } from "@domain/usecases";
import { RecipesRepository } from "@frameworks";
import { container } from "tsyringe";

container.register<RecipesRepository>("RecipesRepositoryFramework", { useClass: RecipesRepository });
container.register<RecipesDataSource>("RecipesDataSourceImpl", { useClass: RecipesDataSourceImpl });
