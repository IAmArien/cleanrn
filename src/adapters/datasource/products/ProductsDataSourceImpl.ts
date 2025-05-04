/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Products } from "@domain/entities";
import { ProductsDataSource } from "@domain/usecases";
import { ProductsRepository } from "@frameworks";
import { APIState } from "@types";
import { inject, injectable } from "tsyringe";

@injectable()
export class ProductsDataSourceImpl implements ProductsDataSource {

  constructor(@inject("ProductsRepositoryFramework") private repository: ProductsRepository) {}

  getProducts(): Promise<APIState<Products, Error>> {
    return this.repository.getProducts();
  }
}
