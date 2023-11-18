import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
import { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const SignUp = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign Up Screen</Text>
        <Button title='Navigate to Sign In' onPress={navigateToSignIn} />
      </Box>
    </SafeAreaWrapper>
  );
};
export default SignUp;
