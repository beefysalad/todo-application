import Button from "@/components/shared/button";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
import theme, { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
const BLOSSOM_IMAGE =
  "https://res.cloudinary.com/dooxt2sgsdooxt2sgs23233/image/upload/v1676809769/youtube/2023/february/blossom/icon_fb36u3.png";
const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const onButtonPress = () => {
    console.log("pressed");
  };
  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={[
          "#ffffff",
          "#fcecff",
          "#f8daff",
          "#fae2ff",
          "#fae2ff",
          "#ffffff",
        ]}
        style={{ flex: 1 }}
      >
        <Box flex={1} justifyContent='center'>
          <Box alignItems='center' mb='3.5'>
            <Image
              source={{
                uri: BLOSSOM_IMAGE,
                width: 120,
                height: 120,
              }}
            />
          </Box>
          <Text fontWeight='700' textAlign='center' variant='textXl'>
            Do you want to be more productive?
          </Text>
          <Box my='3.5' mx='13'>
            <Button
              label={"Start Now"}
              onPress={navigateToSignUp}
              onLongPress={onButtonPress}
            />
          </Box>
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};
export default WelcomeScreen;
