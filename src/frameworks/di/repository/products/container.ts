/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { ProductsDataSourceImpl } from "@adapters/datasource";
import { ProductsDataSource } from "@domain/usecases";
import { ProductsRepository } from "@frameworks";
import { container } from "tsyringe";

container.register<ProductsRepository>("ProductsRepositoryFramework", { useClass: ProductsRepository });
container.register<ProductsDataSource>("ProductsDataSourceImpl", { useClass: ProductsDataSourceImpl });
