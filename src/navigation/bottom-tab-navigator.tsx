import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import TodayScreen from "@/screen/today-screen";
import HomeStackNavigator from "./home-stack-navigator";
import CompletedScreen from "@/screen/completed-screen";
import CategoryStackNavigator from "./category-stack-navigator";
import Icons from "@/components/shared/icons";
import { useTheme } from "@shopify/restyle";
const Tab = createBottomTabNavigator<RootBottomTabParamList>();
export default function BottomTabNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStackNavigator}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => <Icons name='home' color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name='Completed'
        component={CompletedScreen}
        options={() => ({
          title: "Completed",
          tabBarIcon: ({ color }) => <Icons name='completed' color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name='Today'
        component={TodayScreen}
        options={() => ({
          title: "Today",
          tabBarIcon: ({ color }) => <Icons name='calendar' color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name='CategoryStack'
        component={CategoryStackNavigator}
        options={() => ({
          title: "Categories",
          tabBarIcon: ({ color }) => <Icons name='categories' color={color} />,
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});
