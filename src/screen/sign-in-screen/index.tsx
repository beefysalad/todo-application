import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const SignIn = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Box>
      <Text>Sign In Screen</Text>
      <Button title='Navigate to Sign Up' onPress={navigateToSignUp} />
    </Box>
  );
};
export default SignIn;
