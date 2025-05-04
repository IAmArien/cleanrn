/**
 * Property of the Metropolitan Bank & Trust Co.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering team/Digital Banking Division
 */

import { useGetRecipeById, useGetRecipes } from "@adapters/hooks";
import { JSX, useEffect } from "react";
import { View } from "react-native";

export function Recipes(): JSX.Element {
  const { data: recipes } = useGetRecipes();
  const { data: recipe } = useGetRecipeById(1);
  
  useEffect(() => {
    console.log('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    console.log('recipe', JSON.stringify(recipe));
  }, [recipe]);

  return (
    <View>
    </View>
  );
};
