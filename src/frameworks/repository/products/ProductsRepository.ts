/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { Products } from "@domain/entities";
import { APIState, Failure, Success } from "@types";
import axios, { AxiosResponse } from "axios";
import { injectable } from "tsyringe";

@injectable()
export class ProductsRepository {

  getProducts(): Promise<APIState<Products, Error>> {
    return new Promise<APIState<Products, Error>>(
      async (resolve, reject) => {
        try {
          const response: AxiosResponse<Products> =
            await axios.get('https://dummyjson.com/products')
          resolve(Success.create(response.data));
        } catch (error) {
          reject(Failure.create(new Error("Failed to connect")));
        }
      }
    );
  }
}
