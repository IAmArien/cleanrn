/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { useQuery } from "@tanstack/react-query";
import { GetRecipeById } from "@domain/usecases";
import { useResolve } from "tsyringe-react";

/**
 * React query hook to be used in the presentation layer which uses `getRecipeById`
 * UseCase
 * @param recipeId number
 * @returns UseQueryResult of Recipe (if success) and Error (if it fails)
 */
export const useGetRecipeById = (recipeId: number) => {
  /**
   * From here, we can retrieve the instance of `GetRecipeById` created by tsyringe
   * with all the logic happening under the hood. Instead of directly consuming
   * API calls in `queryFn`, we use the UseCase, which then connects to
   * Repository -> DataSource -> DataSourceImpl -> Returns the Entities
   */
  const getRecipeById = useResolve<GetRecipeById>("GetRecipesUseCase");
  return useQuery({
    queryKey: ['useGetRecipeById', recipeId],
    queryFn: async () => await getRecipeById.invoke(recipeId),
    retry: false,
    select: state => {
      if (state.type === 'success') {
        return state.data;
      }
      return undefined;
    }
  });
};
