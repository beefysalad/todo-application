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
      <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Category'
        component={CategoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='CreateCategory'
        component={CreateCategoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default CategoryStackNavigator;
