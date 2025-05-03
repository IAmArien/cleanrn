/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { useQuery } from "@tanstack/react-query";
import { GetRecipes } from "@domain/usecases";
import { useResolve } from "tsyringe-react";

/**
 * React query hook to be used in the presentation layer which uses `getRecipes`
 * UseCase
 * @returns UseQueryResult of Recipe (if success) and Error (if it fails)
 */
export const useGetRecipes = () => {
  /**
   * From here, we can retrieve the instance of `GetRecipes` created by tsyringe
   * with all the logic happening under the hood. Instead of directly consuming
   * API calls in `queryFn`, we use the UseCase, which then connects to
   * Repository -> DataSource -> DataSourceImpl -> Returns the Entities
   */
  const getRecipes = useResolve<GetRecipes>("GetRecipesUseCase");
  return useQuery({
    queryKey: ["useGetRecipes"],
    queryFn: async () => await getRecipes.invoke(),
    retry: false,
    select: state => {
      if (state.type === 'success') {
        return state.data;
      }
      return undefined;
    }
  });
};
