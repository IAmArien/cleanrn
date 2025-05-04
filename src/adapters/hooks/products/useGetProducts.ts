/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { GetProducts } from "@domain/usecases";
import { useQuery } from "@tanstack/react-query";
import { useResolve } from "tsyringe-react";

export const useGetProducts = () => {
  const getProducts = useResolve<GetProducts>("GetProductsUseCase");
  return useQuery({
    queryKey: ["useGetProducts"],
    queryFn: async () => await getProducts.invoke(),
    retry: false,
    select: state => {
      if (state.type === 'success') {
        return state.data;
      }
      return undefined;
    }
  });
};
