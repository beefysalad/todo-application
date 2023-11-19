import { StyleSheet, Text, View } from "react-native";
import { AuthStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "@/screen/welcome-screen";
import SignUpScreen from "@/screen/sign-up-screen";
import SignInScreen from "@/screen/sign-in-screen";

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthStackNavigator;
const styles = StyleSheet.create({});
