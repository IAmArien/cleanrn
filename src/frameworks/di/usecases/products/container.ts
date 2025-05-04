/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { GetProducts, ProductsDataSource, ProductsRepository } from "@domain/usecases";
import { container } from "tsyringe";

container.register<ProductsRepository>("ProductsRepositoryDomain", {
  useFactory: (container) => {
    const dataSource = container.resolve<ProductsDataSource>("ProductsDataSourceImpl");
    return new ProductsRepository(dataSource);
  }
});
container.register<GetProducts>("GetProductsUseCase", {
  useFactory: (container) => {
    const repository = container.resolve<ProductsRepository>("ProductsRepositoryDomain");
    return new GetProducts(repository);
  }
});
