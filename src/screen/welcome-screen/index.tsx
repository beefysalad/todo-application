import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>Welcome Screen</Text>
      <Button title='Navigate to sign in' onPress={navigateToSignIn} />
      <Button title='Navigate to sign up' onPress={navigateToSignUp} />
    </Box>
  );
};
export default WelcomeScreen;
