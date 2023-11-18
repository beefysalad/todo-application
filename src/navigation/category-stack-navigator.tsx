import { StyleSheet } from "react-native";
import { CategoryStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "@/screen/categories-screen";
import CategoryScreen from "@/screen/category-screen";
import CreateCategoryScreen from "@/screen/create-category-screen";

const Stack = createNativeStackNavigator<CategoryStackParamList>();
const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen name='Category' component={CategoryScreen} />
      <Stack.Screen name='CreateCategory' component={CreateCategoryScreen} />
    </Stack.Navigator>
  );
};
export default CategoryStackNavigator;
