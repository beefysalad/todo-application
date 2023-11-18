import { StyleSheet, Text, View } from "react-native";
import { AuthStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "@/screen/welcome-screen";
import SignIn from "@/screen/sign-in-screen";
import SignUp from "@/screen/sign-up-screen";

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthStackNavigator;
const styles = StyleSheet.create({});
