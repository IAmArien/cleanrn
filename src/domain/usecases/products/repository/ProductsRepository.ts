/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Products } from "@domain/entities";
import { ProductsDataSource } from "@domain/usecases";
import { APIState } from "@types";

export class ProductsRepository {

  constructor(private dataSource: ProductsDataSource) {}

  getProducts(): Promise<APIState<Products, Error>> {
    return this.dataSource.getProducts();
  }
}
